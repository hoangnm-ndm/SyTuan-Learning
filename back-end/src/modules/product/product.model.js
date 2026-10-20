import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
      default: 100,
      min: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);
export default Product;
