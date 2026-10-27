import mongoose from "mongoose";
import { optionSchema } from "../../config/dbConfig.js";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    fullname: {
      type: String,
      required: true,
    },
  },
  optionSchema,
);

const User = mongoose.model("User", userSchema);

export default User;
