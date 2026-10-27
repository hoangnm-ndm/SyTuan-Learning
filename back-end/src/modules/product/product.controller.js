import { productService } from "./product.service.js";

export const productController = {
  getAll: async (req, res) => {
    const data = await productService.getAll();
    return res.status(200).json({
      message: "Lay danh sach thanh cong",
      data,
    });
  },
  getById: async (req, res) => {
    //* req.validated
    const data = await productService.getById(req.params.id);
    return res.status(200).json({
      message: "Lay thanh cong",
      data,
    });
  },
  create: async (req, res) => {
    // validation
    const data = await productService.create(req.body);
    console.log(data);
    res.status(201).json({
      message: "Tao san pham thanh cong!",
      data,
    });
  },
  update: async (req, res) => {
    const data = await productService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Cap nhat san pham thanh cong!",
      data,
    });
  },
  remove: async (req, res) => {},
  softDelete: async (req, res) => {
    const data = await productService.update(req.params.id, {
      deletedAt: Date.now(),
    });
    if (!data) {
      return res.status(400).json({
        message: "San pham khong ton tai hoac da bi xoa",
      });
    }
    return res.status(200).json({
      message: "Luu tru san pham thanh cong!",
      data,
    });
  },
};
