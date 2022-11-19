import Jwt from "jsonwebtoken";
import User from "../models/user.model.js";

function authenticate(request, response, next) {
  if (request.headers.authorization !== "") {
    const token = request.headers.authorization.split(" ")[1];
    const decodedToken = Jwt.verify(token, "SECRET_KEY");
    return User.findById(decodedToken.id).then((user) => {
      if (user === null) {
        response.end("User not found");
      }
      request.user = decodedToken;
      next();
    });
  }
}

export default authenticate;
