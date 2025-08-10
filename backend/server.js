import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import cors from "cors";
import { connectDB } from "./db.js";
dotenv.config();

const app = express();
const port = process.env.port || 8080;

app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
