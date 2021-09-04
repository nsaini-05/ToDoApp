import express from "express";
const router = express.Router();

import {
  getToDos,
  createToDo,
  deleteToDo,
} from "../controllers/todoControllers.js";

router.get("/", getToDos);
router.post("/", createToDo);
router.delete("/:id", deleteToDo);

export default router;
