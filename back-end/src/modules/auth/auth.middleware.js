import { authService } from "./auth.service.js";
import { AppError } from "../../shared/errors/AppErrors.js";
import { ERROR_CODES } from "../../shared/errors/errorCodes.js";
import { getAuthTokens } from "../../shared/utils/authCookie.js";

/** Đọc access token từ cookie, gắn user hiện tại vào `req.user`. */
export const authenticate = async (req, res, next) => {
  req.user = await authService.authenticate(getAuthTokens(req).accessToken);
  next();
};

/** Chỉ cho các role liệt kê đi tiếp; luôn đặt sau `authenticate`. */
export const authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError({
        statusCode: 403,
        code: ERROR_CODES.FORBIDDEN,
        message: "Ban khong co quyen thuc hien thao tac nay",
      });
    }
    next();
  };
