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

async function getAllTasks(req, res) {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId).populate("tasks");
    return res.status(200).send({
      success: true,
      message: "Complete get all tasks",
      tasks: user.tasks,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "getAllTasks"),
    });
  }
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
    return res.status(200).send({
      success: true,
      message: "Complete create task",
      task: newTask,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "createTask"),
    });
  }
}

async function updateTask(req, res) {
  const id = req.params.id;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    return res.status(200).send({
      success: true,
      message: "Complete update task",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "updateTask"),
    });
  }
}

async function deleteTask(req, res) {
  const id = req.params.id;
  try {
    const userId = req.user.id;
    const deletedTask = await Task.findByIdAndDelete(id);
    await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    return res.status(200).send({
      success: true,
      message: "Complete delete task",
      task: deletedTask,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "getAllTasks"),
    });
  }
}

export default taskController;
