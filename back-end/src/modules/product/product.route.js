import { Router } from "express";
import { productController } from "./product.controller.js";
import { productCreateSchema } from "./product.schema.js";
import validate from "../../shared/middlewares/validate.js";

const productRoutes = Router();

productRoutes.get("/", productController.getAll);
productRoutes.get("/:id", productController.getById);

// * roles: superAdmin, admin
productRoutes.post(
  "/",
  validate({ body: productCreateSchema }),
  productController.create,
);
productRoutes.patch("/:id", productController.update);
productRoutes.delete("/:id", productController.remove);
productRoutes.patch("/soft-delete/:id", productController.softDelete);

export default productRoutes;
