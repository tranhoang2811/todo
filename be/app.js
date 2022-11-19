import express from "express";
import initRouter from "./routers/index.js";
import mongoose from "mongoose";

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
app.use("/", (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  response.type("application/json");
  next();
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

initRouter(app);
