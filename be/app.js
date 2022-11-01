import express from "express";
import initRouter from "./routers/index.js";
import mongoose from "mongoose";

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
app.use("/", (req, res, next) => {
  res.type("application/json");
  next();
});

initRouter(app);
