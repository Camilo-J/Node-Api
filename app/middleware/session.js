import models from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";
import { verifyToken } from "../utils/handleJwt.js";

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "Not_Token", 401);
      return;
    }
    // token structure expected "Bearer dsadsadsadsacxzczx"
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken._id) {
      handleHttpError(res, "Error_Id_Token", 401);
      return;
    }

    const user = await models.usersModel.findById(dataToken._id);
    req.user = user;

    next();
  } catch (e) {
    handleHttpError(res, "Not_session", 401);
  }
};

export { authMiddleware };
