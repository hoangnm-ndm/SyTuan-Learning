import { z } from "zod";

export const productCreateSchema = z.object({
  title: z.string().min(3).max(200),
  price: z.number().min(1).max(1000000000000),
  description: z.string().optional(),
  stock: z.number().min(0),
});
