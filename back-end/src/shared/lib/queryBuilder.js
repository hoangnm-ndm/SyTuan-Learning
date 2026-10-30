import { z } from "./zod.js";

/**
 * Phân trang + lọc + sắp xếp + tìm kiếm dùng chung cho mọi model.
 *
 * Mỗi model khai báo một `config` (danh sách field được phép — client không thể
 * lọc/sắp xếp theo field ngoài danh sách):
 *
 *   {
 *     searchFields: ["title", "description"],   // `search` khớp một trong các field
 *     sortFields: ["title", "price"],           // field được phép sắp xếp
 *     defaultSort: "-createdAt",                // mặc định "-createdAt"
 *     filters: { price: "number", createdAt: "date", status: "string" },
 *   }
 *
 * Query string tương ứng:
 *   ?page=2&limit=20            phân trang (limit tối đa MAX_LIMIT)
 *   &sort=-price,title          "-" = giảm dần, nhiều field cách nhau dấu phẩy
 *   &search=ao+thun             tìm không phân biệt hoa thường
 *   &price=100                  bằng
 *   &price_gte=100&price_lte=500   khoảng (chỉ kiểu number | date)
 *
 * Dùng: `createListQuerySchema(config)` cho `validate({ query })`, rồi
 * `paginate(Model, config, req.validated.query, baseFilter)` trong service.
 */

export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 100;

const emptyToUndefined = (value) => (value === "" ? undefined : value);
const optional = (schema) => z.preprocess(emptyToUndefined, schema.optional());

const FILTER_TYPES = {
  string: { schema: () => z.string(), range: false },
  number: { schema: () => z.coerce.number(), range: true },
  date: { schema: () => z.coerce.date(), range: true },
  boolean: {
    schema: () => z.enum(["true", "false"]).transform((v) => v === "true"),
    range: false,
  },
};

const RANGE_OPERATORS = { gte: "$gte", lte: "$lte" };

// Một filter khai báo sinh ra các tham số query: `field`, `field_gte`, `field_lte`.
const filterParams = (filters = {}) =>
  Object.entries(filters).flatMap(([field, type]) => {
    const { range } = FILTER_TYPES[type];
    return [
      { key: field, field, type, operator: "$eq" },
      ...(range
        ? Object.entries(RANGE_OPERATORS).map(([suffix, operator]) => ({
            key: `${field}_${suffix}`,
            field,
            type,
            operator,
          }))
        : []),
    ];
  });

const parseSort = (sort) =>
  Object.fromEntries(
    sort
      .split(",")
      .map((token) => (token.startsWith("-") ? [token.slice(1), -1] : [token, 1])),
  );

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Zod schema kiểm tra + ép kiểu query string theo `config`. */
export const createListQuerySchema = (config) => {
  const sortFields = new Set(config.sortFields);

  const shape = {
    page: z.preprocess(
      emptyToUndefined,
      z.coerce.number().int().min(1).default(1),
    ),
    limit: z.preprocess(
      emptyToUndefined,
      z.coerce.number().int().min(1).max(MAX_LIMIT).default(DEFAULT_LIMIT),
    ),
    sort: optional(z.string()).superRefine((sort, ctx) => {
      const invalid = sort
        ?.split(",")
        .map((token) => token.replace(/^-/, ""))
        .filter((field) => !sortFields.has(field));
      if (invalid?.length) {
        ctx.addIssue({
          code: "custom",
          message: `Khong the sap xep theo: ${invalid.join(", ")}`,
        });
      }
    }),
  };

  if (config.searchFields?.length) {
    shape.search = optional(z.string().trim().min(1).max(100));
  }
  for (const { key, type } of filterParams(config.filters)) {
    shape[key] = optional(FILTER_TYPES[type].schema());
  }

  return z.object(shape);
};

/**
 * Chuyển query đã validate thành tham số cho Mongoose.
 * Hàm thuần (không đụng DB) nên dễ test riêng.
 * @returns {{ filter: Object, sort: Object, skip: number, limit: number, page: number }}
 */
export const buildQuery = (config, query) => {
  const { page, limit, search, sort } = query;

  const filter = {};
  for (const { key, field, operator } of filterParams(config.filters)) {
    if (query[key] === undefined) continue;
    filter[field] = { ...filter[field], [operator]: query[key] };
  }

  if (search && config.searchFields?.length) {
    const regex = new RegExp(escapeRegExp(search), "i");
    filter.$or = config.searchFields.map((field) => ({ [field]: regex }));
  }

  // `_id` làm tiêu chí phụ để thứ tự ổn định giữa các trang khi giá trị trùng nhau.
  const sortBy = parseSort(sort ?? config.defaultSort ?? "-createdAt");
  sortBy._id ??= 1;

  return { filter, sort: sortBy, skip: (page - 1) * limit, limit, page };
};

/**
 * Truy vấn một trang dữ liệu.
 * @param {import("mongoose").Model} Model
 * @param {Object} config cấu hình của model (xem đầu file)
 * @param {Object} query `req.validated.query`
 * @param {Object} [baseFilter] điều kiện luôn áp dụng (vd. `{ deletedAt: null }`),
 *   ghi đè filter của client nếu trùng field
 * @returns {Promise<{ data: Array, meta: { page, limit, total, totalPages } }>}
 */
export const paginate = async (Model, config, query, baseFilter = {}) => {
  const { filter, sort, skip, limit, page } = buildQuery(config, query);
  const finalFilter = { ...filter, ...baseFilter };

  const [data, total] = await Promise.all([
    Model.find(finalFilter).sort(sort).skip(skip).limit(limit),
    Model.countDocuments(finalFilter),
  ]);

  return {
    data,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};
