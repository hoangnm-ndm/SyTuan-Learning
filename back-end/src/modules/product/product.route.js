import { Router } from "express";
import { productController } from "./product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);
productRoutes.get("/:id", productController.getById);
productRoutes.post("/", productController.create);
productRoutes.patch("/:id", productController.update);
productRoutes.delete("/:id", productController.remove);
productRoutes.patch("/soft-delete/:id", productController.softDelete);

export default productRoutes;
