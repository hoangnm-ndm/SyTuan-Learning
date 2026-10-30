import { Router } from "express";
import productRoutes from "../modules/product/product.route.js";
import authRoutes from "../modules/auth/auth.route.js";
import userRoutes from "../modules/user/user.route.js";

const routes = Router();

routes.use("/products", productRoutes);
routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);
// routes.use("/categories", productRoutes);

export default routes;
