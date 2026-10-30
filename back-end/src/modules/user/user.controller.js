import { userService } from "./user.service.js";
import { ok } from "../../shared/utils/response.js";

export const userController = {
  updateRole: async (req, res) => {
    const data = await userService.updateRole(
      req.user,
      req.validated.params.id,
      req.validated.body.role,
    );
    return ok(res, { message: "Cap nhat role thanh cong!", data });
  },
};
