import { envConfig } from "../../config/envConfig.js";
import { getTokenExpiresAt } from "../lib/token.js";

// Token chỉ nằm trong cookie httpOnly → JS phía client không đọc được (chống XSS
// đánh cắp token). Refresh token giới hạn path để chỉ gửi kèm các request /auth.
const COOKIES = {
  accessToken: { name: "access_token", path: "/" },
  refreshToken: { name: "refresh_token", path: "/api/auth" },
};

const baseOptions = {
  httpOnly: true,
  secure: envConfig.NODE_ENV === "production",
  sameSite: "lax",
};

export const getAuthTokens = (req) => ({
  accessToken: req.cookies?.[COOKIES.accessToken.name],
  refreshToken: req.cookies?.[COOKIES.refreshToken.name],
});

// Cả hai cookie sống bằng hạn của refresh token: access token hết hạn vẫn được
// gửi lên để server trả AUTH_TOKEN_EXPIRED (frontend biết cần refresh), thay vì
// trình duyệt âm thầm xoá cookie làm server chỉ thấy "không có token".
export const setAuthCookies = (res, tokens) => {
  const expires = getTokenExpiresAt(tokens.refreshToken);
  for (const [key, { name, path }] of Object.entries(COOKIES)) {
    res.cookie(name, tokens[key], { ...baseOptions, path, expires });
  }
};

// Xoá cookie phải khớp path/secure/sameSite với lúc set thì trình duyệt mới xoá.
export const clearAuthCookies = (res) => {
  for (const { name, path } of Object.values(COOKIES)) {
    res.clearCookie(name, { ...baseOptions, path });
  }
};
