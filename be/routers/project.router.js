import express from "express";

const projectRouter = express.Router();

projectRouter.get("/", getAllProject);
projectRouter.post("/", createProject);

export default projectRouter;
