/**
 * Cấu trúc response chuẩn cho toàn backend — mọi controller và errorHandler
 * trả về qua các hàm dưới đây, không tự `res.json({...})`.
 *
 * Thành công: `{ success: true, message, data, meta? }`
 * Thất bại:   `{ success: false, error: { code, message, details? } }`
 *
 * `data` luôn có mặt (null nếu không có dữ liệu); `meta` chỉ có khi truyền
 * (vd. phân trang).
 */
const sendSuccess = (res, statusCode, { message, data = null, meta }) =>
  res.status(statusCode).json({
    success: true,
    message,
    data,
    ...(meta && { meta }),
  });

export const ok = (res, payload) => sendSuccess(res, 200, payload);

export const created = (res, payload) => sendSuccess(res, 201, payload);

export const sendError = (res, { statusCode, code, message, details }) =>
  res.status(statusCode).json({
    success: false,
    error: { code, message, ...(details?.length && { details }) },
  });
