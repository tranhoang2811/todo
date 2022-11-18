import mongoose from "mongoose";

const Schema = mongoose.Schema;

const project = Schema({
  name: {
    type: String,
    require: true,
  },
  isDone: {
    type: Boolean,
    require: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Project = mongoose.model("Project", project);

export default Project;
