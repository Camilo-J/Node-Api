import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/tracks.js";
import { checkRol } from "../middleware/rol.js";
import { authMiddleware } from "../middleware/session.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.js";

const router = Router();

router.get("/", getItems);
router.get(
  "/:id",
  authMiddleware,
  checkRol(["admin"]),
  validatorGetItem,
  getItem
);
router.post("/", authMiddleware, validatorCreateItem, createItem);
router.patch(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);
router.delete("/:id", authMiddleware, deleteItem);

export { router };
