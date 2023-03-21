import { matchedData } from "express-validator";
import models from "../models/index.js";
import { handleHttpError } from "../utils/handleError.js";

const getItems = async (req, res) => {
  try {
    const data = await models.tracksModel.find({});

    res.json(data);
  } catch (e) {
    handleHttpError(res, "Error_Get_Items");
  }
};
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await models.tracksModel.findById(id);
    console.log(req);
    console.log(id);
    res.json(data);
  } catch (error) {
    handleHttpError(res, "Error_Get_Item");
  }
};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const newItem = await models.tracksModel.create(body);
    res.json(newItem);
  } catch (e) {
    handleHttpError(res, "Error_Post_Items");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const newItem = await models.tracksModel.findOneAndUpdate(id, body);
    res.json(newItem);
  } catch (e) {
    handleHttpError(res, "Error_Update_item");
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await models.tracksModel.deleteOne({ _id: id });

    res.sendStatus(204);
  } catch (error) {
    handleHttpError(res, "Error_Delete_Item");
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
