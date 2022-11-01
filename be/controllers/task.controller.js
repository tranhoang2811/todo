import Task from "../models/task.model.js";
import { handleError } from "../helper.js";

const taskController = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

function getAllTasks(req, res) {
  Task.find()
    .then((allTasks) => {
      res.send(JSON.stringify(allTasks));
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "getAllTasks");
    });
}

function getTaskById(req, res) {
  const id = req.params.id;
  console.log(id);
  Task.findById(id)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "getTaskById");
    });
}

function createTask(req, res) {
  const task = new Task(req.body);
  console.log(req.body);
  task
    .save()
    .then((newTask) => {
      res.send(newTask);
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "createTask");
    });
}

function updateTask(req, res) {
  const id = req.params.id;
  Task.findByIdAndUpdate({ _id: id }, { $set: req.body })
    .exec()
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "updateTask");
    });
}

function deleteTask(req, res) {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .exec()
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "deleteTask");
    });
}

export default taskController;
