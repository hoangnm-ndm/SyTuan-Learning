import { Router } from "express";
import { authController } from "./auth.controller.js";
import validate from "../../shared/middlewares/validate.js";
import { registerAuthSchema } from "./auth.schema.js";

const authRoutes = Router();

authRoutes.post(
  "/register",
  validate({ body: registerAuthSchema }),
  authController.register,
);
authRoutes.post("/login", authController.login);
authRoutes.post("/logout", authController.logout);

export default authRoutes;
