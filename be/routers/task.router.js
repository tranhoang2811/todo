import express from "express";
import taskController from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.get("/:id", taskController.getTaskById);
taskRouter.post("/", taskController.createTask);
taskRouter.patch("/:id", taskController.updateTask);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;
