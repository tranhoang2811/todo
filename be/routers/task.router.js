import express from "express";

const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/", getTaskById);
taskRouter.post("/", createTask);
taskRouter.patch("/", updateTask);
taskRouter.delete("/", deleteTask);

export default taskRouter;
