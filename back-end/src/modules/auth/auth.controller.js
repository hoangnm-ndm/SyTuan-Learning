import { authService } from "./auth.service.js";
import {
  clearAuthCookies,
  setAuthCookies,
} from "../../shared/utils/authCookie.js";

export const authController = {
  register: async (req, res) => {
    const user = await authService.register(req.validated.body);

    return res.status(201).json({
      message: "Dang ky thanh cong!",
      data: user,
    });
  },
  login: async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.login(
      req.validated.body,
    );

    setAuthCookies(res, { accessToken, refreshToken });

    return res.status(200).json({
      message: "Login thanh cong!",
      data: user,
    });
  },
  logout: async (req, res) => {
    clearAuthCookies(res);

    return res.status(200).json({ message: "Logout thanh cong!" });
  },
  forgotPassword: async (req, res) => {},
  changePassword: async (req, res) => {},
  resetPassword: async (req, res) => {},
  refreshToken: async (req, res) => {},
};
