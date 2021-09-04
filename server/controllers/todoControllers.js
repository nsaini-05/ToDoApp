import ToDoModel from "../models/todoModel.js";
import mongoose from "mongoose";

export const getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.status(200).json(toDos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createToDo = async (req, res) => {
  const todoItem = req.body;
  const newTodo = new ToDoModel(todoItem);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteToDo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that ID" });
  }

  const todoItem = ToDoModel.findById(id);
  await todoItem.remove();
  res.json({ message: "Post deleted successfully" });
};
