import express from 'express';
import "dotenv/config";
import http from "http";
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from "./userRoutes";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const { PORT } = process.env || 4000;

mongoose.connect(process.env.MONGO_URL!)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

app.use("/", userRoutes);
