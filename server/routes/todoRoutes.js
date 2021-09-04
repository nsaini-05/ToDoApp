import express from "express";
const router = express.Router();

import {
  getToDos,
  createToDo,
  deleteToDo,
  updateToDo,
} from "../controllers/todoControllers.js";

router.get("/", getToDos);
router.post("/", createToDo);
router.delete("/:id", deleteToDo);
router.patch("/:id", updateToDo);

export default router;
