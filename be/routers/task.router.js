import express from "express";
import taskController from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.get("/", taskController.getTaskById);
taskRouter.post("/", taskController.createTask);
taskRouter.patch("/", taskController.updateTask);
taskRouter.delete("/", taskController.deleteTask);

export default taskRouter;
