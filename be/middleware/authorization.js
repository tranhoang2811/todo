import accessControl from "../utils/accessControl.js";

function authorize(action, resource) {
  return (request, response, next) => {
    const permission = accessControl.can(request.user.role)[action](resource);
    if (!permission.granted) {
      return response.status(401).end(
        JSON.stringify({
          error: "You don't have enough permission to perform this action",
        })
      );
    }
    next();
  };
}

export default authorize;
