import dotenv from "dotenv";

dotenv.config({
  // * tuy chon
});

// Biến bắt buộc, không có mặc định: để trống = chưa điền → dừng ngay lúc khởi động.
const REQUIRED_ENV = ["DB_URI", "JWT_SECRET_AT", "JWT_SECRET_RT"];

const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(
    `Chua dien bien moi truong bat buoc: ${missingEnv.join(", ")} (xem .env.example)`,
  );
  process.exit(1);
}

// Biến tùy chọn: để trống = dùng giá trị mặc định.
export const envConfig = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  JWT_SECRET_AT: process.env.JWT_SECRET_AT,
  JWT_EXPIRES_IN_AT: process.env.JWT_EXPIRES_IN_AT || "15m",
  JWT_SECRET_RT: process.env.JWT_SECRET_RT,
  JWT_EXPIRES_IN_RT: process.env.JWT_EXPIRES_IN_RT || "7d",
};
