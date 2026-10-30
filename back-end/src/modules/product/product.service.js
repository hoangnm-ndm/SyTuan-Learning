import Product from "./product.model.js";
import { AppError } from "../../shared/errors/AppErrors.js";
import { ERROR_CODES } from "../../shared/errors/errorCodes.js";

const assertFound = (product) => {
  if (!product) {
    throw new AppError({
      statusCode: 404,
      code: ERROR_CODES.RESOURCE_NOT_FOUND,
      message: "Khong tim thay san pham",
    });
  }
  return product;
};

export const productService = {
  getAll: async () => {
    const data = await Product.find();
    return data;
  },
  getById: async (id) => {
    const data = await Product.findById(id);
    return assertFound(data);
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
    return assertFound(data);
  },
  remove: async (id) => {
    const data = await Product.findByIdAndDelete(id);
    return data;
  },
};
