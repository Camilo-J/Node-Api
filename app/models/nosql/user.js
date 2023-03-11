import { model, Schema } from "mongoose";

const UserScheme = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
    role: { type: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("users", UserScheme);
