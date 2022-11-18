import Jwt from "jsonwebtoken";
import User from "../models/user.model.js";

function authenticate(req, res, next) {
  if (req.headers.authorization !== "") {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = Jwt.verify(token, "SECRET_KEY");
    return User.findById(decodedToken.id).then((user) => {
      if (user === null) {
        res.end("User not found");
      }
      req.user = decodedToken;
      next();
    });
  }
}

export default authenticate;
