import { Router } from "express";
import {
  createItem,
  deletetem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/tracks.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.patch("/:id", updateItem);
router.delete("/:id", deletetem);

export { router };
