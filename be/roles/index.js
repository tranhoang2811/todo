import { AccessControl } from "accesscontrol";

const grantArray = [
  {
    role: "employee",
    resource: "project",
    action: "read:own",
    attributes: "*",
  },
  { role: "employee", resource: "task", action: "create:own", attributes: "*" },
  { role: "employee", resource: "task", action: "read:own", attributes: "*" },
  { role: "admin", resource: "project", action: "create:own", attributes: "*" },
  { role: "admin", resource: "project", action: "read:own", attributes: "*" },
  { role: "admin", resource: "project", action: "update:own", attributes: "*" },
  { role: "admin", resource: "task", action: "create:own", attributes: "*" },
  { role: "admin", resource: "task", action: "update:own", attributes: "*" },
  { role: "admin", resource: "task", action: "read:own", attributes: "*" },
  { role: "admin", resource: "task", action: "delete:own", attributes: "*" },
];

const ac = new AccessControl(grantArray);

export default ac;
