import { z } from "../../shared/lib/zod.js";
import { ROLES } from "../../shared/const/roles.js";

// superAdmin chỉ tạo qua seed, không gán qua API.
export const updateRoleSchema = z.object({
  role: z.enum([ROLES.ADMIN, ROLES.MEMBER]),
});
