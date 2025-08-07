import express from "express";
import { getTodos } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
export default router;
