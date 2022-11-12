import { api } from "./index.js";

export function getTasks() {
  return api.get("/tasks");
}
