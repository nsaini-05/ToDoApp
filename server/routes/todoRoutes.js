import express from "express";
const router = express.Router();

import { getToDos, createToDo } from "../controllers/todoControllers.js";

router.get("/", getToDos);
router.post("/", createToDo);

export default router;
