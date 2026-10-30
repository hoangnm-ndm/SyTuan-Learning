import mongoose from "mongoose";
import { envConfig } from "../config/envConfig.js";
import User from "../modules/user/user.model.js";
import { ROLES } from "../shared/const/roles.js";
import { hashPassword } from "../shared/lib/password.js";

const {
  SEED_SUPER_ADMIN_EMAIL: email,
  SEED_SUPER_ADMIN_PASSWORD: password,
  SEED_SUPER_ADMIN_FULLNAME: fullname,
} = envConfig;

if (!email || !password) {
  console.error(
    "Chua dien SEED_SUPER_ADMIN_EMAIL / SEED_SUPER_ADMIN_PASSWORD (xem .env.example)",
  );
  process.exit(1);
}

await mongoose.connect(envConfig.DB_URI);

// Chạy lại nhiều lần an toàn: user đã có thì chỉ nâng role, không đổi mật khẩu.
const user = await User.findOne({ email });
if (user) {
  user.role = ROLES.SUPER_ADMIN;
  await user.save();
  console.log(`Da nang ${email} len ${ROLES.SUPER_ADMIN}`);
} else {
  await User.create({
    email,
    fullname,
    password: await hashPassword(password),
    role: ROLES.SUPER_ADMIN,
  });
  console.log(`Da tao ${ROLES.SUPER_ADMIN}: ${email}`);
}

await mongoose.disconnect();
