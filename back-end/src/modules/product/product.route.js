import { Router } from "express";
import { productController } from "./product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);
productRoutes.post("/", productController.create);

export default productRoutes;
