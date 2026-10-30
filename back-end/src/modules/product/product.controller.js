import { productService } from "./product.service.js";
import { created, ok } from "../../shared/utils/response.js";

export const productController = {
  getAll: async (req, res) => {
    const { data, meta } = await productService.getAll(req.query);
    return ok(res, { message: "Lay danh sach thanh cong", data, meta });
  },
  getById: async (req, res) => {
    const data = await productService.getById(req.validated.params.id);
    return ok(res, { message: "Lay thanh cong", data });
  },
  create: async (req, res) => {
    const data = await productService.create(req.validated.body);
    return created(res, { message: "Tao san pham thanh cong!", data });
  },
  update: async (req, res) => {
    const data = await productService.update(
      req.validated.params.id,
      req.validated.body,
    );
    return ok(res, { message: "Cap nhat san pham thanh cong!", data });
  },
  remove: async (req, res) => {
    await productService.remove(req.validated.params.id);
    return ok(res, { message: "Xoa san pham thanh cong!" });
  },
  softDelete: async (req, res) => {
    const data = await productService.update(req.validated.params.id, {
      deletedAt: Date.now(),
    });
    return ok(res, { message: "Luu tru san pham thanh cong!", data });
  },
  restore: async (req, res) => {
    const data = await productService.restore(req.validated.params.id);
    return ok(res, { message: "Khoi phuc san pham thanh cong!", data });
  },
};
