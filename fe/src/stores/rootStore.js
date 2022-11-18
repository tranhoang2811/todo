import { TaskStore } from "./taskStore.js";
import { UserStore } from "./userStore.js";

export class RootStore {
  constructor() {
    this.taskStore = new TaskStore(this);
    this.userStore = new UserStore(this);
  }
}

export const rootStore = new RootStore();
