import { flattenError, success, z } from "zod";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppErrors.js";
import { ERROR_CODES } from "../errors/errorCodes.js";

function normalizeError(err) {
  if (err instanceof AppError) {
    return {
      statusCode: err.statusCode,
      code: err.code,
      message: err.message,
      details: err.details,
    };
  }
  if (err instanceof z.ZodError) {
    return {
      statusCode: 400,
      code: ERROR_CODES.VALIDATION_ERROR,
      message: "Du lieu dau vao khong hop le!",
      details: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    };
  }

  if (err instanceof jwt.TokenExpiredError) {
    return {
      statusCode: 401,
      code: ERROR_CODES.AUTH_TOKEN_EXPIRED,
      message: "Phien dang nhap da het han",
    };
  }

  if (err instanceof jwt.JsonWebTokenError) {
    return {
      statusCode: 400,
      code: ERROR_CODES.AUTH_TOKEN_INVALID,
      message: "Phien dang nhap khong hop le",
    };
  }
}

export default function errorHandler(err, req, res, next) {
  if (res.headerSent) return next(err);

  const { statusCode, code, message, details } = normalizeError(err);

  if (statusCode >= 500) {
    // * ghi lại lỗi không rõ nguyên nhân vào log
    // logger.error(
    //   { err, method: req.method, url: req.originalUrl },
    //   "Loi khong xu ly duoc!",
    // );

    res.status(500).json({
      success: false,
      error: { code, message, ...(details ?? { details }) },
    });
  }
  res.status(statusCode).json({
    success: false,
    error: { code, message, ...(details ?? { details }) },
  });
}
