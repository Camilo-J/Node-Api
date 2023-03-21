import { Router } from "express";
import upload from "../config/multer.js";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
} from "../controllers/storage.js";
import { validatorGetItem } from "../validators/storage.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.delete("/:id", validatorGetItem, deleteItem);

router.post("/", upload.single("image"), createItem);

export { router };
