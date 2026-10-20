import mongoose from "mongoose";
import { envConfig } from "./envConfig.js";

export default function connectDB() {
  mongoose
    .connect(envConfig.DB_URI)
    .then(() => {
      console.log("Connect DB successfully!");
    })
    .catch((err) => {
      console.log(`Connect DB failed: ${err}`);
    });
}
