import { makeObservable, observable, action } from "mobx";

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
}
