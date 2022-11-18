import Jwt from "jsonwebtoken";
import User from "../models/user.model.js";

function authenticate(req, res) {
  if (req.header.authorization !== "") {
    const token = req.body.authorization.split(" ")[1];
    const decodedToken = Jwt.verify(token, "SECRET_KEY");
    return User.findById(decodedToken.id).then((user) => {
      if (user === null) {
        res.end("User not found");
      }
      req.user = decodedToken;
    });
  }
}

export default authenticate;
