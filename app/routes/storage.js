import { Router } from "express";
import upload from "../config/multer.js";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
} from "../controllers/storage.js";
import { validatorGetItem } from "../validators/storage.js";
import { authMiddleware } from "../middleware/session.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", authMiddleware, validatorGetItem, getItem);
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

router.post("/", authMiddleware, upload.single("image"), createItem);

export { router };
