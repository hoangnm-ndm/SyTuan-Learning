import bcrypt from "bcryptjs";
import User from "../user/user.model.js";

export const authController = {
  register: async (req, res) => {
    /**
     * * Bước 1: Kiểm tra tài khoản có tồn tại không?
     * * Bước 2: Mã hoá mật khẩu
     * * Bước 3: Lưu vào DB
     * * Bước 4: Thông báo thành công (loại bỏ mật khẩu trong kết quả trả về)
     */
    // * Brute Force

    const { fullname, email, password } = req.validated;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "Dang ky bi loi, vui long thu lai sau!",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({ email, password: hashPassword, fullname });

    user.password = undefined;

    return res.status(201).json({
      message: "Dang ky thanh cong!",
      data: user,
    });
  },
  login: async (req, res) => {},
  logout: async (req, res) => {},
  forgotPassword: async (req, res) => {},
  changePassword: async (req, res) => {},
  resetPassword: async (req, res) => {},
  refreshToken: async (req, res) => {},
};
