import { Router } from "express";
import { productController } from "./product.controller.js";
import { productCreateSchema, productUpdateSchema } from "./product.schema.js";
import validate from "../../shared/middlewares/validate.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";
import { ADMIN_ROLES } from "../../shared/const/roles.js";

const productRoutes = Router();

// * roles: superAdmin, admin
const adminOnly = [authenticate, authorize(...ADMIN_ROLES)];

productRoutes.get("/", productController.getAll);
productRoutes.get("/:id", productController.getById);

productRoutes.post(
  "/",
  adminOnly,
  validate({ body: productCreateSchema }),
  productController.create,
);
productRoutes.patch(
  "/:id",
  adminOnly,
  validate({ body: productUpdateSchema }),
  productController.update,
);
productRoutes.delete("/:id", adminOnly, productController.remove);
productRoutes.patch(
  "/soft-delete/:id",
  adminOnly,
  productController.softDelete,
);
productRoutes.patch("/restore/:id", adminOnly, productController.restore);

export default productRoutes;
