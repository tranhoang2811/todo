import Task from "../models/task.model.js";

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
      console.log(`Error: ${err}`);
    });
}

function getTaskById(req, res) {
  const id = req.url.split("/")[2];
  Task.findById(id)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
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
      console.log(`Error: ${err}`);
    });
}

function updateTask(req, res) {
  const id = req.url.split("/")[2];
  Task.findByIdAndUpdate({ _id: id }, { $set: req.body })
    .exec()
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

function deleteTask(req, res) {
  const id = req.url.split("/")[2];
  Task.findByIdAndDelete(id)
    .exec()
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

export default taskController;
