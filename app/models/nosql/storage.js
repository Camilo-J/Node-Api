import { model, Schema } from "mongoose";

const StorageScheme = new Schema(
  {
    url: { type: String },
    filename: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("storages", StorageScheme);
