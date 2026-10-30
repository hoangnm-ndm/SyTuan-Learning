import { authService } from "./auth.service.js";
import {
  clearAuthCookies,
  getAuthTokens,
  setAuthCookies,
} from "../../shared/utils/authCookie.js";
import { created, ok } from "../../shared/utils/response.js";

export const authController = {
  register: async (req, res) => {
    const user = await authService.register(req.validated.body);

    return created(res, { message: "Dang ky thanh cong!", data: user });
  },
  login: async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.login(
      req.validated.body,
    );

    setAuthCookies(res, { accessToken, refreshToken });

    return ok(res, { message: "Login thanh cong!", data: user });
  },
  logout: async (req, res) => {
    await authService.logout(getAuthTokens(req).refreshToken);
    clearAuthCookies(res);

    return ok(res, { message: "Logout thanh cong!" });
  },
  forgotPassword: async (req, res) => {},
  changePassword: async (req, res) => {},
  resetPassword: async (req, res) => {},
  refreshToken: async (req, res) => {
    const tokens = await authService.refresh(getAuthTokens(req).refreshToken);

    setAuthCookies(res, tokens);

    return ok(res, { message: "Lam moi phien dang nhap thanh cong!" });
  },
};
