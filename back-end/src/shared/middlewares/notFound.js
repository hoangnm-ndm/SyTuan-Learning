import { AppError } from "../errors/AppErrors.js";
import { ERROR_CODES } from "../errors/errorCodes.js";

export function notFound(req, res, next) {
  next(
    new AppError({
      status: 404,
      code: ERROR_CODES.ROUTE_NOT_FOUND,
      message: `Khong tim thay duong dan ${req.method}: ${req.originalUrl} `,
    }),
  );
}
