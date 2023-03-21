import { matchedData } from "express-validator";
import { cloudinary } from "../config/cloudinary.js";
import models from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";

const getItems = async (req, res) => {
  try {
    const data = await models.storageModel.find({});
    res.json(data);
  } catch (error) {
    handleHttpError(res, "Error_Get_Items");
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.storageModel.findById(id);
    res.json(data);
  } catch (error) {
    handleHttpError(res, "Error_Get_Item");
  }
};

const createItem = async (req, res) => {
  try {
    const { file } = req;
    const newdata = {
      filename: file.filename,
      url: file.path,
    };
    const newItem = await models.storageModel.create(newdata);
    res.json(newItem);
  } catch (error) {
    handleHttpError(res, "Error_Create_Item");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const media = await models.storageModel.deleteOne(id);
    if (!media) res.status(404).json({ message: "File Not Found" });

    await cloudinary.uploader.destroy(`${media.filename}`);
    res.sendStatus(204);
  } catch (error) {
    handleHttpError(res, "Error_Delete_Item");
  }
};

export { getItems, getItem, createItem, deleteItem };
