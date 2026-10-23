import Product from "./product.model.js";

export const productService = {
  getAll: async () => {
    const data = await Product.find();
    return data;
  },
  getById: async (id) => {
    const data = await Product.findById(id);
    return data;
  },
  create: async (payload) => {
    const data = await Product.create(payload);
    return data;
  },
  update: async (id, payload) => {
    const data = await Product.findOneAndUpdate(
      {
        _id: id,
        deletedAt: null,
      },
      payload,
      {
        returnDocument: "after",
      },
    );
    return data;
  },
  remove: async (id) => {
    const data = await Product.findByIdAndDelete(id);
    return data;
  },
};
