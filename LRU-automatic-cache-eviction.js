class CustomLRUCache {
  #MAX_CACHE_SIZE = 20;
  constructor() {
    this.cache = new Map();
  }

  set(key, value) {
    if (this.cache.size >= this.#MAX_CACHE_SIZE) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.set(key, value);
      return value;
    }
  }

  getAll() {
    return Object.fromEntries(this.cache.entries());
  }

  delete(key) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      return true;
    } else {
      return false;
    }
  }
}

let cache = new CustomLRUCache();

for (let i = 0; i < 20; i++) {
  cache.set(i + 1, i);
}

cache.get(1);

cache.set(21, 20);

console.log({ cache: cache.getAll() });
