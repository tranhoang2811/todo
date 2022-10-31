import express from "express";
import taskRouter from "./task.router.js";
import userRouter from "./user.router.js";
import projectRouter from "./project.router.js";

const router = express.Router();

const initRouter = (app) => {
  router.use("/tasks", taskRouter);
  router.use("/projects", projectRouter);
  router.use("/users", userRouter);

  return app.use("/", router);
};

export default initRouter;
