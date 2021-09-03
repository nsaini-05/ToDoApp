import express from "express";
const router = express.Router();

import { getToDos } from "../controllers/todoControllers.js";

router.get("/", getToDos);

export default router;
