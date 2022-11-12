import { makeObservable, observable, action, get } from "mobx";
import { getTasks } from "../API/listing.js";

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

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  async fetchTaskList() {
    const taskList = await getTasks();
    console.log(taskList.data);
    this.tasks = taskList.data;
  }
}
