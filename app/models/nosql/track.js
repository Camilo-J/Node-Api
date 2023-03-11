import { model, Schema, Types } from "mongoose";

const TrackScheme = new Schema(
  {
    name: { type: String },
    album: { type: String },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: { type: String },
      nickname: { type: String },
      nationality: { type: String },
    },
    duration: {
      start: { type: Number },
      end: { type: Number },
    },
    mediaId: { type: Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("tracks", TrackScheme);
