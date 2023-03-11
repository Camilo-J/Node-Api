import express from "express";
import cors from "cors";
import "dotenv/config";
import dbConnect from "./config/mongo.js";

const app = express();

app.use(cors());

const port = process.env.PORT;

app.listen(port);

console.log("Server on port", port);

dbConnect();
