import express from "express";
import initRouter from "./routers/index.js";

const port = 3000;
const app = express();

initRouter(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
app.use("/", (req, res, next) => {
  res.type("application/json");
  next();
});
