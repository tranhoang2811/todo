import mongoose from "mongoose";

const Schema = mongoose.Schema;

mongoose
  .connect(
    "mongodb+srv://trandanghoang2811:vegitosuper17@todo-app.qolwtds.mongodb.net/todo-app"
  )
  .then(() => {
    console.log("Connect successful");
  })
  .catch(() => {
    console.log("Connect fail");
  });

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
