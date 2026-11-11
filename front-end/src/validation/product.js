import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  stock: z.number().min(0, { message: "Stock must be a positive number" }),
  description: z.string().optional(),
});
