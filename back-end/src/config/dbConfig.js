import mongoose from "mongoose";
import { env } from "./env.js";

export default function connectDB() {
  mongoose
    .connect(env.MONGODB_URI)
    .then(() => {
      console.log("Connect DB successfully!");
    })
    .catch((err) => {
      console.log(`Connect DB failed: ${err}`);
    });
}

export const optionSchema = {
  versionKey: false,
  timestamps: true,
};
