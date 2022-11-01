import User from "../models/user.model.js";
import Jwt from "jsonwebtoken";
import crypto from "crypto";

const userController = {
  logIn,
  register,
  updateUser,
};

async function logIn(req, res) {
  const account = req.body;
  const foundUser = User.findOne(account);
  if (!foundUser) {
    token = Jwt.sign({
      id: foundUser.id,
      role: foundUser.role,
    });
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

function updateUser(req, res) {}

export default userController;
