import models from "../models/index.js";
import { encrypt, comparePassword } from "../utils/handlePassword.js";
import { tokenSign } from "../utils/handleJwt.js";
import { check, matchedData } from "express-validator";
import { handleHttpError } from "../utils/handleError.js";

const registerUser = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await models.usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.json({ data });
  } catch (e) {
    handleHttpError(res, "Error_Register_User");
  }
};

/**
 * this controller is the handler of login session
 * @param {*} req
 * @param {*} res
 */
const loginUser = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await models.usersModel
      .findOne({ email: req.email })
      .select("password name role email");

    if (!user) {
      handleHttpError(res, "User_Not_Exist", 404);
      return;
    }
    const hashPassword = await user.get("password");
    const check = await comparePassword(req.password, hashPassword);

    if (!check) {
      handleHttpError(res, "Password_Invalid");
      return;
    }

    user.set("password", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };

    res.json(data);
  } catch (e) {
    handleHttpError(res, "Error_Login_User", 401);
  }
};

export { registerUser, loginUser };
