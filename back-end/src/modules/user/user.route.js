import { Router } from "express";
import { userController } from "./user.controller.js";
import { updateRoleSchema } from "./user.schema.js";
import validate from "../../shared/middlewares/validate.js";
import { idParamsSchema } from "../../shared/schemas/id.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";
import { ROLES } from "../../shared/const/roles.js";

const userRoutes = Router();

userRoutes.use(authenticate, authorize(ROLES.SUPER_ADMIN));
userRoutes.patch(
  "/:id/role",
  validate({ params: idParamsSchema, body: updateRoleSchema }),
  userController.updateRole,
);

export default userRoutes;
