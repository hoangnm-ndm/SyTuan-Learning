import { productService } from "./product.service.js";

export const productController = {
  getAll: async (req, res) => {},
  getById: async (req, res) => {},
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
    res.status(200).json({
      message: "Luu tru san pham thanh cong!",
      data,
    });
  },
};
