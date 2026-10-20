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
  update: async (req, res) => {},
  remove: async (req, res) => {},
};
