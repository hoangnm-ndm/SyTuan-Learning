import Product from "./product.model.js";

export const productService = {
  getAll: async () => {},
  getById: async () => {},
  create: async (payload) => {
    const data = await Product.create(payload);
    return data;
  },
  update: async () => {},
  remove: async () => {},
};
