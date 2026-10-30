import { z } from "./zod.js";

/**
 * Phân trang + lọc + sắp xếp + tìm kiếm cho mọi model, trong một lần gọi:
 *
 *   queryBuilder(Product, req.query, {
 *     searchable: ["title", "description"],
 *     filterable: ["price", "stock", "createdAt"],
 *     sortable: ["title", "price", "createdAt"],
 *     baseFilter: { deletedAt: null },
 *   });
 *   // → { data, meta: { page, limit, total, totalPages } }
 *
 * Chỉ cần liệt kê tên field — kiểu (Number, Date, String, Boolean, ObjectId) tự
 * đọc từ Mongoose schema để ép kiểu và kiểm tra. Field ngoài danh sách bị bỏ qua.
 *
 * Query string:
 *   ?page=2&limit=20                 phân trang (limit tối đa MAX_LIMIT)
 *   &sort=-price,title               "-" = giảm dần
 *   &search=ao                       tìm không phân biệt hoa thường
 *   &price=100                       bằng
 *   &price_gte=100&price_lte=500     khoảng (chỉ Number, Date)
 *
 * Query sai → ZodError (errorHandler trả 400 kèm field lỗi).
 *
 * @param {import("mongoose").Model} Model
 * @param {Object} query thường là `req.query`
 * @param {Object} [options]
 * @param {string[]} [options.searchable] field cho `search`
 * @param {string[]} [options.filterable] field được lọc
 * @param {string[]} [options.sortable] field được sắp xếp, mặc định = filterable + createdAt
 * @param {string} [options.defaultSort] mặc định "-createdAt"
 * @param {Object} [options.baseFilter] điều kiện luôn áp dụng, thắng filter của client
 * @param {number} [options.limit] số bản ghi mỗi trang mặc định
 * @param {string|Object} [options.select] projection, vd. "-password"
 * @param {string|Object|Array} [options.populate]
 * @param {boolean} [options.lean] mặc định true (nhanh hơn, trả object thường)
 */

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

const PARSERS = {
  String: z.string(),
  Number: z.coerce.number(),
  Date: z.coerce.date(),
  Boolean: z.enum(["true", "false"]).transform((v) => v === "true"),
  ObjectId: z.string().regex(/^[0-9a-fA-F]{24}$/, "ID khong hop le"),
};
const RANGE_TYPES = new Set(["Number", "Date"]);
const PAGE = z.coerce.number().int().min(1);
const LIMIT = z.coerce.number().int().min(1).max(MAX_LIMIT);
const TEXT = z.string().trim().max(100);

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const queryBuilder = async (
  Model,
  query = {},
  {
    searchable = [],
    filterable = [],
    sortable = [...filterable, "createdAt"],
    defaultSort = "-createdAt",
    baseFilter = {},
    limit: defaultLimit = DEFAULT_LIMIT,
    select,
    populate,
    lean = true,
  } = {},
) => {
  const issues = [];
  // Đọc + ép kiểu một tham số; rỗng = không truyền; sai thì gom lỗi, báo một lần.
  const read = (key, schema) => {
    const value = query[key];
    if (value === undefined || value === "") return undefined;
    const result = schema.safeParse(value);
    if (result.success) return result.data;
    issues.push(...result.error.issues.map((i) => ({ ...i, path: [key] })));
  };

  const page = read("page", PAGE) ?? 1;
  const limit = read("limit", LIMIT) ?? defaultLimit;
  const search = read("search", TEXT);

  const filter = {};
  for (const field of filterable) {
    const type = Model.schema.path(field)?.instance;
    const parser = PARSERS[type];
    if (!parser) {
      throw new Error(
        `queryBuilder: khong loc duoc ${Model.modelName}.${field}`,
      );
    }
    const operators = Object.entries({
      $eq: read(field, parser),
      ...(RANGE_TYPES.has(type) && {
        $gte: read(`${field}_gte`, parser),
        $lte: read(`${field}_lte`, parser),
      }),
    }).filter(([, value]) => value !== undefined);
    if (operators.length) filter[field] = Object.fromEntries(operators);
  }

  if (search && searchable.length) {
    const regex = new RegExp(escapeRegExp(search), "i");
    filter.$or = searchable.map((field) => ({ [field]: regex }));
  }

  const sort = {};
  for (const token of (read("sort", TEXT) || defaultSort).split(",")) {
    const field = token.trim().replace(/^-/, "");
    if (!field) continue;
    if (!sortable.includes(field)) {
      issues.push({
        code: "custom",
        path: ["sort"],
        message: `Khong the sap xep theo: ${field}`,
      });
      continue;
    }
    sort[field] = token.trim().startsWith("-") ? -1 : 1;
  }
  // `_id` làm tiêu chí phụ để thứ tự ổn định giữa các trang khi giá trị trùng.
  sort._id ??= 1;

  if (issues.length) throw new z.ZodError(issues);

  const where = { ...filter, ...baseFilter };
  const find = Model.find(where, select)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(limit)
    .lean(lean);
  if (populate) find.populate(populate);

  const [data, total] = await Promise.all([find, Model.countDocuments(where)]);

  return {
    data,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};
