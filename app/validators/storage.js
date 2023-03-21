import { check } from "express-validator";
import { validateResults } from "../utils/handlerValidator.js";

const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
];

export { validatorGetItem };
