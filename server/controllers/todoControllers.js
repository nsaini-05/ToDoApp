import ToDoModel from "../models/todoModel.js";

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
