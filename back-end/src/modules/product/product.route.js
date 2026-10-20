import { Router } from "express";
import { productController } from "./product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);

export default productRoutes;
