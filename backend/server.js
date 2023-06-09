import express from "express";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
connectDB();

app.listen(5000, () => console.log("server is running on port 5000"));
