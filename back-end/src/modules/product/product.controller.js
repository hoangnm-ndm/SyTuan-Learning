import { productService } from "./product.service.js";
import { created, ok } from "../../shared/utils/response.js";

export const productController = {
  getAll: async (req, res) => {
    const data = await productService.getAll();
    return ok(res, { message: "Lay danh sach thanh cong", data });
  },
  getById: async (req, res) => {
    //* req.validated
    const data = await productService.getById(req.params.id);
    return ok(res, { message: "Lay thanh cong", data });
  },
  create: async (req, res) => {
    const data = await productService.create(req.validated.body);
    return created(res, { message: "Tao san pham thanh cong!", data });
  },
  update: async (req, res) => {
    const data = await productService.update(
      req.params.id,
      req.validated.body,
    );
    return ok(res, { message: "Cap nhat san pham thanh cong!", data });
  },
  remove: async (req, res) => {},
  softDelete: async (req, res) => {
    const data = await productService.update(req.params.id, {
      deletedAt: Date.now(),
    });
    return ok(res, { message: "Luu tru san pham thanh cong!", data });
  },
};
