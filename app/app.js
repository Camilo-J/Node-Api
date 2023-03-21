import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./config/mongo.js";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/api/v1", router);
app.listen(port);

console.log("Server on port", port);

dbConnect();
