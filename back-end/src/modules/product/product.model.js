import mongoose from "mongoose";
import { optionSchema } from "../../config/dbConfig.js";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      default: 100,
      min: 0,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  optionSchema,
);

const Product = mongoose.model("Product", productSchema);
export default Product;
