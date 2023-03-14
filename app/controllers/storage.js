import models from "../models/index.js";

const getItems = async (req, res) => {
  const data = await models.storageModel.find({});

  res.json(data);
};
const getItem = async (req, res) => {};

const createItem = async (req, res) => {
  const { file } = req;
  console.log(file);
  const newdata = {
    filename: file.filename,
    url: file.path,
  };
  const newItem = await models.storageModel.create(newdata);
  res.json(newItem);
};
const updateItem = async (req, res) => {};

const deletetem = async (req, res) => {};

export { getItems, getItem, createItem, updateItem, deletetem };
