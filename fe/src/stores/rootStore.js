import { TaskStore } from "./taskStore.js";

export class RootStore {
  constructor() {
    this.taskStore = new TaskStore(this);
  }
}

export const rootStore = new RootStore();
