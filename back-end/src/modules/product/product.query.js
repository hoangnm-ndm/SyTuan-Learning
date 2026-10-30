import { createListQuerySchema } from "../../shared/lib/queryBuilder.js";

export const productQueryConfig = {
  searchFields: ["title", "description"],
  sortFields: ["title", "price", "stock", "createdAt"],
  defaultSort: "-createdAt",
  filters: { price: "number", stock: "number", createdAt: "date" },
};

export const productListQuerySchema = createListQuerySchema(productQueryConfig);
