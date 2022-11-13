import { api } from "./index.js";

export function getTasks() {
  return api.get("/tasks");
}

export function createTask(name) {
  return api.post("/tasks", { name: name, isDone: false });
}

export function deleteTask(id) {
  return api.delete(`/tasks/${id}`);
}

export function register(fullName, email, password, isMale, age, role) {
  return api.post("/users/register", {
    fullName: fullName,
    email: email,
    password: password,
    isMale: isMale,
    age: age,
    role: role,
  });
}
