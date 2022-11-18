import express from "express";
import taskController from "../controllers/task.controller.js";
import authorize from "../middleware/authorization.js";
import authenticate from "../middleware/authentication.js";

const taskRouter = express.Router();

taskRouter.get(
  "/",
  authenticate,
  authorize("readOwn", "task"),
  taskController.getAllTasks
);

taskRouter.get(
  "/:id",
  authenticate,
  authorize("readOwn", "task"),
  taskController.getTaskById
);

taskRouter.post(
  "/",
  authenticate,
  authorize("createOwn", "task"),
  taskController.createTask
);

taskRouter.patch(
  "/:id",
  authenticate,
  authorize("updateOwn", "task"),
  taskController.updateTask
);

taskRouter.delete(
  "/:id",
  authenticate,
  authorize("deleteOwn", "task"),
  taskController.deleteTask
);

export default taskRouter;
