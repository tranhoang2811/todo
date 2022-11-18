import { action, makeObservable, observable } from "mobx";
import { register } from "../API/listing";

export class UserStore {
  user = {};
  constructor(rootStore) {
    makeObservable(this, {
      user: observable,
      register: action,
    });
    this.rootStore = rootStore;
  }
  async register(fullName, email, password, isMale, age, role) {
    const res = await register(fullName, email, password, isMale, age, role);
    this.user = res.data;
  }
}
