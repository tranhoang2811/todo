import express from "express";
import userController from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/log-in", userController.logIn);
userRouter.post("/register", userController.register);
userRouter.patch("/:id", userController.updateUser);

export default userRouter;
