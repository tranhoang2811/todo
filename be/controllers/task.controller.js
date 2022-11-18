import Task from "../models/task.model.js";
import handleError from "../helper.js";
import User from "../models/user.model.js";

const taskController = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

function getAllTasks(req, res) {
  const userId = req.user.id;
  User.findById(userId)
    .populate("tasks")
    .then((user) => {
      res.send(JSON.stringify(user.tasks));
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "getAllTasks");
    });
}

function getTaskById(req, res) {
  const id = req.params.id;
  Task.findById(id)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "getTaskById");
    });
}

async function createTask(req, res) {
  try {
    const newTask = await Task.create(req.body);
    const userId = req.user.id;
    await User.findByIdAndUpdate(userId, { $push: { tasks: newTask._id } });
    return res.end(JSON.stringify(newTask));
  } catch (err) {
    handleError(err, "/controller/tasks.controller.js", "createTask");
  }
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
