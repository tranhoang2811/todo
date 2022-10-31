import express from "express";

const userRouter = express.Router();

userRouter.post("/", logIn);
userRouter.post("/", register);

export default userRouter;
