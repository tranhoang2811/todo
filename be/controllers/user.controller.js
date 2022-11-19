import User from "../models/user.model.js";
import Jwt from "jsonwebtoken";
// import { handleError } from "../helper.js";
import crypto from "crypto";

const userController = {
  logIn,
  register,
  updateUser,
};

async function logIn(request, response) {
  const account = request.body;
  const foundUser = await User.findOne(account);
  if (foundUser) {
    const token = Jwt.sign(
      {
        id: foundUser.id,
        role: foundUser.role,
      },
      "SECRET_KEY"
    );
    return response.end(JSON.stringify(token));
  }
  return response.end("User account does not exist");
}

async function register(request, response) {
  const information = request.body;
  const emailFound = await User.findOne({ email: information.email });
  if (!emailFound) {
    User.create(information);
    return response.end(
      JSON.stringify({
        success: true,
        user: information,
      })
    );
  }
  return response.end("User email has already existed");
}

async function updateUser(request, response) {
  const userId = request.params.id;
  const updatedUser = await User.findByIdAndUpdate(userId, request.body);
  return response.end(JSON.stringify(updatedUser));
}

export default userController;
