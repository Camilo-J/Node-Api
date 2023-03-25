import models from "../models/index.js";
import { encrypt, comparePassword } from "../utils/handlePassword.js";
import { tokenSign } from "../utils/handleJwt.js";
import { matchedData } from "express-validator";

const registerUser = async (req, res) => {
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
};

export { registerUser };
