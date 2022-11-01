import express from "express";
import initRouter from "./routers/index.js";
import mongoose from "mongoose";

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

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

app.use(express.json());
app.use("/", (req, res, next) => {
  res.type("application/json");
  next();
});

initRouter(app);
