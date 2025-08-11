import express from "express";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodoState,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.patch("/:id", updateTodoState);
router.delete("/:id", deleteTodo);

export default router;
