import Todo from "../model/todoModel.js";
import dotenv from "dotenv";

dotenv.config();

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todos", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addTodo = async (req, res) => {
  try {
    if (!req.body.title || !req.body.title.trim())
      return res.status(400).json({ message: "Title is required" });
    const newTodo = new Todo({
      title: req.body.title,
      completed: req.body.completed || false,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
      completed: req.body.completed || false,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};
