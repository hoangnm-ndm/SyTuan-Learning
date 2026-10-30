import dotenv from "dotenv";

dotenv.config({
  // * tuy chon
});

export const envConfig = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  JWT_SECRET_AT: process.env.JWT_SECRET_AT,
  JWT_EXPIRES_IN_AT: process.env.JWT_EXPIRES_IN_AT,
  JWT_SECRET_RT: process.env.JWT_SECRET_RT,
  JWT_EXPIRES_IN_RT: process.env.JWT_EXPIRES_IN_RT,
};
