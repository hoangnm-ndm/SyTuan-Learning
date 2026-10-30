import jwt from "jsonwebtoken";
import { envConfig } from "../../config/envConfig.js";

const TOKEN_OPTIONS = {
  access: {
    secret: envConfig.JWT_SECRET_AT,
    expiresIn: envConfig.JWT_EXPIRES_IN_AT,
  },
  refresh: {
    secret: envConfig.JWT_SECRET_RT,
    expiresIn: envConfig.JWT_EXPIRES_IN_RT,
  },
};

const signToken = (type, payload) => {
  const { secret, expiresIn } = TOKEN_OPTIONS[type];
  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Ký cặp access + refresh token cho một user.
 * @param {string} userId
 * @returns {{ accessToken: string, refreshToken: string }}
 */
export const signAuthTokens = (userId) => ({
  accessToken: signToken("access", { _id: userId }),
  refreshToken: signToken("refresh", { _id: userId }),
});

/** Thời điểm hết hạn (`Date`) của token, đọc từ claim `exp`. */
export const getTokenExpiresAt = (token) =>
  new Date(jwt.decode(token).exp * 1000);
