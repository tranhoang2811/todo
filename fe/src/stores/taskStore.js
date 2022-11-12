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
    const response = await createTask(name);
    this.tasks.push(response.data);
  }

  async removeTask(id) {
    const response = await deleteTask(id);
    this.tasks = this.tasks.filter((task) => task._id !== response.data._id);
    console.log(this.tasks);
  }
}
