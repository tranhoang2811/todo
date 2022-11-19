import mongoose from "mongoose";

const Schema = mongoose.Schema;

const task = new Schema({
  name: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    require: true,
  },
});

const Task = mongoose.model("Task", task);
export default Task;
