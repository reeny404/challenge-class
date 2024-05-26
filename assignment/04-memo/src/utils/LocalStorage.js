export const KEY = {
  MEMO: "challenage-assign/04-memo/list",
};

class LocalStorage {
  #instance;

  constructor() {
    this.#instance = window.localStorage;
  }

  get(key) {
    return this.#instance.getItem(key);
  }

  set(key, val) {
    this.#instance.setItem(key, val);
  }
}

export default new LocalStorage();
