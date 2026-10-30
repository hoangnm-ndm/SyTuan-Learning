import { Router } from "express";
import { productController } from "./product.controller.js";
import { productListQuerySchema } from "./product.query.js";
import { productCreateSchema, productUpdateSchema } from "./product.schema.js";
import validate from "../../shared/middlewares/validate.js";
import { idParamsSchema } from "../../shared/schemas/id.js";
import { authenticate, authorize } from "../auth/auth.middleware.js";
import { ADMIN_ROLES } from "../../shared/const/roles.js";

const productRoutes = Router();

const idParams = validate({ params: idParamsSchema });

productRoutes.get(
  "/",
  validate({ query: productListQuerySchema }),
  productController.getAll,
);
productRoutes.get("/:id", idParams, productController.getById);

productRoutes.use(authenticate, authorize(...ADMIN_ROLES));
productRoutes.post(
  "/",
  validate({ body: productCreateSchema }),
  productController.create,
);
productRoutes.patch(
  "/:id",
  validate({ params: idParamsSchema, body: productUpdateSchema }),
  productController.update,
);
productRoutes.delete("/:id", idParams, productController.remove);
productRoutes.patch("/soft-delete/:id", idParams, productController.softDelete);
productRoutes.patch("/restore/:id", idParams, productController.restore);

export default productRoutes;
