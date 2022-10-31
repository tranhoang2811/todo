import Project from "./project.model.js";
import User from "./user.model.js";
import Task from "./task.model.js";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://trandanghoang2811:*****@todo-app.qolwtds.mongodb.net/todo-app"
  )
  .then(() => {
    console.log("Connect successful");
  })
  .catch(() => {
    console.log("Connect fail");
  });

export default {
  Project,
  User,
  Task,
};
