import { handleHttpError } from "../utils/handleError.js";

/**
 * Array with roles allowed
 * @param {*} rol
 * @returns
 */
const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role;
    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    );

    if (!checkValueRol) {
      handleHttpError(res, "Error_Not_Permission", 401);
      return;
    }

    next();
  } catch (error) {
    handleHttpError(res, "Error_Permissions", 403);
  }
};

export { checkRol };
