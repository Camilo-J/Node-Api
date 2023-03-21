import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/tracks.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.patch("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", deleteItem);

export { router };
