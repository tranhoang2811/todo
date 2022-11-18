import ac from "../roles/index.js";

function authorize(action, resource) {
  return (req, res, next) => {
    const permission = ac.can(req.user.role)[action](resource);
    if (!permission.granted) {
      return res.status(401).end(
        JSON.stringify({
          error: "You don't have enough permission to perform this action",
        })
      );
    }
    next();
  };
}

export default authorize;
