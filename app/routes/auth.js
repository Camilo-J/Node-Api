import { Router } from "express";
import { matchedData } from "express-validator";
import { validatorRegister, validatorLogin } from "../validators/auth.js";

import { registerUser, loginUser } from "../controllers/auth.js";

const router = Router();

router.post("/login", validatorLogin, loginUser);

router.post("/register", validatorRegister, registerUser);

export { router };
