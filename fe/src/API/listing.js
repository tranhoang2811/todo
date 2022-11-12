import { api } from "./index.js";

export function getTasks() {
  return api.get("/tasks");
}

export function createTask(name) {
  return api.post("/tasks", { name: name, isDone: false });
}
