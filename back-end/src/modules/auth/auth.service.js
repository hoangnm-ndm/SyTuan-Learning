import mongoose from "mongoose";
import User from "../user/user.model.js";
import Session from "./session.model.js";
import { AppError } from "../../shared/errors/AppErrors.js";
import { ERROR_CODES } from "../../shared/errors/errorCodes.js";
import { comparePassword, hashPassword } from "../../shared/lib/password.js";
import {
  getTokenExpiresAt,
  signAuthTokens,
  tryVerifyToken,
  verifyToken,
} from "../../shared/lib/token.js";

const toPublicUser = (user) => {
  const { password, ...publicUser } = user.toObject();
  return publicUser;
};

const invalidCredentials = () =>
  new AppError({
    statusCode: 400,
    code: ERROR_CODES.INVALID_CREDENTIALS,
    message: "Tai khoan hoac mat khau khong chinh xac!",
  });

const unauthorized = () =>
  new AppError({
    statusCode: 401,
    code: ERROR_CODES.AUTH_TOKEN_INVALID,
    message: "Phien dang nhap khong hop le",
  });

// Token hợp lệ nhưng user đã bị xoá → vẫn coi là không hợp lệ.
const getUserByToken = async (type, token) => {
  if (!token) throw unauthorized();

  const payload = verifyToken(type, token);
  const user = await User.findById(payload._id).select("-password");
  if (!user) throw unauthorized();

  return { user, payload };
};

// Tạo session mới và ký cặp token gắn với nó.
const issueSession = async (userId) => {
  const sessionId = new mongoose.Types.ObjectId();
  const tokens = signAuthTokens(userId, sessionId);

  await Session.create({
    _id: sessionId,
    user: userId,
    expiresAt: getTokenExpiresAt(tokens.refreshToken),
  });

  return tokens;
};

export const authService = {
  register: async ({ email, fullname, password }) => {
    const existUser = await User.exists({ email });
    if (existUser) {
      // Thông điệp chung để không lộ email nào đã đăng ký (brute force / enumeration).
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.DUPLICATE_VALUE,
        message: "Dang ky bi loi, vui long thu lai sau!",
      });
    }

    const user = await User.create({
      email,
      fullname,
      password: await hashPassword(password),
    });

    return toPublicUser(user);
  },

  login: async ({ email, password }) => {
    const user = await User.findOne({ email });
    // User chưa có mật khẩu (vd. đăng ký qua OAuth) cũng coi là sai thông tin.
    if (!user?.password || !(await comparePassword(password, user.password))) {
      throw invalidCredentials();
    }

    return { user: toPublicUser(user), ...(await issueSession(user._id)) };
  },

  authenticate: async (accessToken) =>
    (await getUserByToken("access", accessToken)).user,

  // Xoay vòng: mỗi refresh token dùng đúng một lần. Session đã bị xoá (token cũ
  // đã xoay, đã logout) → từ chối.
  refresh: async (refreshToken) => {
    const { user, payload } = await getUserByToken("refresh", refreshToken);
    if (!payload.jti) throw unauthorized();

    const session = await Session.findOneAndDelete({
      _id: payload.jti,
      user: user._id,
    });
    if (!session) throw unauthorized();

    return issueSession(user._id);
  },

  // Token hỏng/hết hạn thì không còn gì để thu hồi → bỏ qua, không báo lỗi.
  logout: async (refreshToken) => {
    const payload = tryVerifyToken("refresh", refreshToken);
    if (payload?.jti) {
      await Session.deleteOne({ _id: payload.jti, user: payload._id });
    }
  },
};
