import { check } from "express-validator";
import { validateResults } from "../utils/handlerValidator.js";

const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("password").exists().notEmpty().isLength({ min: 6, max: 20 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => validateResults(req, res, next),
];

const validatorLogin = [
  check("password").exists().notEmpty().isLength({ min: 6, max: 20 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => validateResults(req, res, next),
];

export { validatorRegister, validatorLogin };

// name: { type: String },
// age: { type: Number },
// email: { type: String },
// password: { type: String },
