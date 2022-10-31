import userController from "./user.controller.js";
import taskController from "./task.controller.js";
import projectController from "./project.controller.js";

export default {
  ...userController,
  ...taskController,
  ...projectController,
};
