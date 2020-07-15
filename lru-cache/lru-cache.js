const { Node, DoublyLinkedList } = require('../linked-list/doubly-linked-list');

const DEFAULT_CAPACITY = 8;

class LRUCache {
  constructor() {
    this.cache = new DoublyLinkedList();
    this.map = new Map();
    this.capacity = DEFAULT_CAPACITY;
  }

  get(key) {}``

  put(key, value) {}
}
