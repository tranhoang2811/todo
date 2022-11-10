import User from "../models/user.model.js";
import Jwt from "jsonwebtoken";
// import { handleError } from "../helper.js";
import crypto from "crypto";

const userController = {
  logIn,
  register,
  updateUser,
};

async function logIn(req, res) {
  const account = req.body;
  const foundUser = await User.findOne(account);
  if (foundUser) {
    const token = Jwt.sign(
      {
        id: foundUser.id,
        role: foundUser.role,
      },
      "SECRET_KEY"
    );
    return res.end(JSON.stringify(token));
  }
  return res.end("User account does not exist");
}

async function register(req, res) {
  const information = req.body;
  const emailFound = await User.findOne({ email: information.email });
  if (!emailFound) {
    User.create(information);
    return res.end(
      JSON.stringify({
        success: true,
        user: information,
      })
    );
  }
  return res.end("User email has already existed");
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUser = await User.findByIdAndUpdate(userId, req.body);
  return res.end(JSON.stringify(updatedUser));
}

export default userController;
