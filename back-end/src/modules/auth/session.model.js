import mongoose from "mongoose";
import { optionSchema } from "../../config/dbConfig.js";

// Mỗi refresh token đang hiệu lực tương ứng một session (`_id` = claim `jti`).
// Xoá session = thu hồi token; MongoDB tự dọn session hết hạn nhờ TTL index.
const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: 0 },
    },
  },
  optionSchema,
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;
