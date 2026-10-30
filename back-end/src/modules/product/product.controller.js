import { productService } from "./product.service.js";
import { AppError } from "../../shared/errors/AppErrors.js";
import { ERROR_CODES } from "../../shared/errors/errorCodes.js";
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
    // validation
    const data = await productService.create(req.body);
    return created(res, { message: "Tao san pham thanh cong!", data });
  },
  update: async (req, res) => {
    const data = await productService.update(req.params.id, req.body);
    return ok(res, { message: "Cap nhat san pham thanh cong!", data });
  },
  remove: async (req, res) => {},
  softDelete: async (req, res) => {
    const data = await productService.update(req.params.id, {
      deletedAt: Date.now(),
    });
    if (!data) {
      throw new AppError({
        statusCode: 404,
        code: ERROR_CODES.RESOURCE_NOT_FOUND,
        message: "San pham khong ton tai hoac da bi xoa",
      });
    }
    return ok(res, { message: "Luu tru san pham thanh cong!", data });
  },
};
