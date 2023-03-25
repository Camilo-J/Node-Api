import { Router } from "express";
import { matchedData } from "express-validator";
import { validatorRegister, validatorLogin } from "../validators/auth.js";

import { registerUser } from "../controllers/auth.js";

const router = Router();

router.post("/login", validatorLogin, (req, res) => {
  req = matchedData(req);
  res.json({ data: req });
});

router.post("/register", validatorRegister, registerUser);

export { router };
