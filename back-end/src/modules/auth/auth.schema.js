import { z } from "zod";

export const registerAuthSchema = z.object({
  email: z.string().email(),
  fullname: z.string().min(3),
  password: z.string(),
});

export const loginAuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
