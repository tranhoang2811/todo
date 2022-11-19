import { makeObservable, observable, action, get } from "mobx";
import { getTasks, createTask, deleteTask } from "../API/listing.js";

export class TaskStore {
  tasks = [];
  constructor(rootStore) {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      removeTask: action,
    });
    this.rootStore = rootStore;
  }

  async fetchTaskList() {
    const response = await getTasks();
    this.tasks = response.data;
  }

  async addTask(name) {
    await createTask(name);
    await this.fetchTaskList();
  }

  async removeTask(id) {
    await deleteTask(id);
    await this.fetchTaskList();
  }
}
