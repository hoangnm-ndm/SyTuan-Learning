import { z } from "../lib/zod.js";

// ObjectId của MongoDB: đúng 24 ký tự hex.
export const idParamsSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "ID khong hop le"),
});
