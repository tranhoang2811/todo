import Task from "../models/task.model.js";
import handleError from "../utils/handleError.js";
import User from "../models/user.model.js";

const taskController = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

async function getAllTasks(request, response) {
  const userId = request.user.id;
  try {
    const user = await User.findById(userId).populate("tasks");
    return response.status(200).send({
      success: true,
      message: "Complete get all tasks",
      tasks: user.tasks,
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "getAllTasks"),
    });
  }
}

function getTaskById(request, response) {
  const id = request.params.id;
  Task.findById(id)
    .then((task) => {
      response.send(task);
    })
    .catch((err) => {
      handleError(err, "/controller/tasks.controller.js", "getTaskById");
    });
}

async function createTask(request, response) {
  try {
    const newTask = await Task.create(request.body);
    const userId = request.user.id;
    await User.findByIdAndUpdate(userId, { $push: { tasks: newTask._id } });
    return response.status(200).send({
      success: true,
      message: "Complete create task",
      task: newTask,
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "createTask"),
    });
  }
}

async function updateTask(request, response) {
  const id = request.params.id;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      { _id: id },
      { $set: request.body }
    );
    return response.status(200).send({
      success: true,
      message: "Complete update task",
      task: updatedTask,
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "updateTask"),
    });
  }
}

async function deleteTask(request, response) {
  const id = request.params.id;
  try {
    const userId = request.user.id;
    const deletedTask = await Task.findByIdAndDelete(id);
    await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    return response.status(200).send({
      success: true,
      message: "Complete delete task",
      task: deletedTask,
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: "Uncompleted",
      error: handleError(err, "/controller/tasks.controller.js", "deleteTask"),
    });
  }
}

export default taskController;
