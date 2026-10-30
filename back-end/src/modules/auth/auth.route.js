import { Router } from "express";
import { authController } from "./auth.controller.js";
import validate from "../../shared/middlewares/validate.js";
import { loginAuthSchema, registerAuthSchema } from "./auth.schema.js";

const authRoutes = Router();

authRoutes.post(
  "/register",
  validate({ body: registerAuthSchema }),
  authController.register,
);
authRoutes.post(
  "/login",
  validate({ body: loginAuthSchema }),
  authController.login,
);
authRoutes.post("/logout", authController.logout);
authRoutes.post("/refresh-token", authController.refreshToken);

export default authRoutes;
