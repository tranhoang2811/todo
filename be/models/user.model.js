import mongoose from "mongoose";

const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isMale: {
    type: Boolean,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  imagePath: {
    type: String,
    require: false,
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", user);
export default User;
