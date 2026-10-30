import User from "../user/user.model.js";
import { AppError } from "../../shared/errors/AppErrors.js";
import { ERROR_CODES } from "../../shared/errors/errorCodes.js";
import { comparePassword, hashPassword } from "../../shared/lib/password.js";
import { signAuthTokens } from "../../shared/lib/token.js";

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

    return { user: toPublicUser(user), ...signAuthTokens(user._id) };
  },
};
