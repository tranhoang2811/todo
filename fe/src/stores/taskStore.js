import { makeObservable, observable, action, get } from "mobx";
import { getTasks, createTask } from "../API/listing.js";

export class TaskStore {
  tasks = [];
  constructor(rootStore) {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      deleteTask: action,
    });
    this.rootStore = rootStore;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  async fetchTaskList() {
    const response = await getTasks();
    this.tasks = response.data;
  }

  async addTask(name) {
    const response = await createTask(name);
    this.tasks.push(response.data);
  }
}
