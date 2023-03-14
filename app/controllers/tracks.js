import models from "../models/index.js";

const getItems = async (req, res) => {
  const data = await models.tracksModel.find({});

  res.json(data);
};
const getItem = async (req, res) => {};

const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const newItem = await models.tracksModel.create(body);
  res.json(newItem);
};
const updateItem = async (req, res) => {};

const deletetem = async (req, res) => {};

export { getItems, getItem, createItem, updateItem, deletetem };
