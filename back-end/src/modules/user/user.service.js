import User from "./user.model.js";
import { AppError } from "../../shared/errors/AppErrors.js";
import { ERROR_CODES } from "../../shared/errors/errorCodes.js";
import { ROLES } from "../../shared/const/roles.js";

const forbidden = (code, message) =>
  new AppError({ statusCode: 403, code, message });

export const userService = {
  updateRole: async (actor, id, role) => {
    if (String(actor._id) === id) {
      throw forbidden(
        ERROR_CODES.CANNOT_MODIFY_SELF,
        "Khong the tu doi role cua chinh minh",
      );
    }

    const user = await User.findById(id).select("-password");
    if (!user) {
      throw new AppError({
        statusCode: 404,
        code: ERROR_CODES.RESOURCE_NOT_FOUND,
        message: "Khong tim thay nguoi dung",
      });
    }
    if (user.role === ROLES.SUPER_ADMIN) {
      throw forbidden(
        ERROR_CODES.CANNOT_MODIFY_SUPER_ADMIN,
        "Khong the doi role cua superAdmin",
      );
    }

    user.role = role;
    await user.save();
    return user;
  },
};
