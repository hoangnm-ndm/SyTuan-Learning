import mongoose from "mongoose";
import { optionSchema } from "../../config/dbConfig.js";
import { ROLES } from "../../shared/const/roles.js";

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
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.MEMBER,
    },
  },
  optionSchema,
);

const User = mongoose.model("User", userSchema);

export default User;
