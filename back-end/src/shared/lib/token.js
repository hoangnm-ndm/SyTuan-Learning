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
 * Ký cặp access + refresh token cho một user. Refresh token mang `jti` = id
 * session để server thu hồi được từng token.
 * @param {string} userId
 * @param {string} sessionId
 * @returns {{ accessToken: string, refreshToken: string }}
 */
export const signAuthTokens = (userId, sessionId) => ({
  accessToken: signToken("access", { _id: userId }),
  refreshToken: signToken("refresh", { _id: userId, jti: String(sessionId) }),
});

/** Kiểm tra chữ ký + hạn; sai hoặc hết hạn thì ném lỗi jsonwebtoken (→ 401). */
export const verifyToken = (type, token) =>
  jwt.verify(token, TOKEN_OPTIONS[type].secret);

/** Như `verifyToken` nhưng token sai/hết hạn thì trả `null` thay vì ném lỗi. */
export const tryVerifyToken = (type, token) => {
  try {
    return verifyToken(type, token);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) return null;
    throw err;
  }
};

/** Thời điểm hết hạn (`Date`) của token, đọc từ claim `exp`. */
export const getTokenExpiresAt = (token) =>
  new Date(jwt.decode(token).exp * 1000);
