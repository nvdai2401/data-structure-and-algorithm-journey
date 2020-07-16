const { Node, DoublyLinkedList } = require('../linked-list/doubly-linked-list');

const DEFAULT_CAPACITY = 8;

class LRUCache {
  constructor() {
    this.list = new DoublyLinkedList();
    // store pairs of key and node for quick accessing the list
    this.map = new Map();
  }

  put(key, value) {
    if (this.list.length >= DEFAULT_CAPACITY) {
      this.map.delete(this.list.tail.key);
      this.list.popBack();
    }
    // remove a node that's in the list
    if (this.map.has(key)) {
      this.__remove(key);
    }
    this.list.pushFront(value, key);
    this.map.set(key, this.list.head);
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return;
    this.__remove(key);
    this.list.pushFront(node.value, key);
  }

  __remove(key) {
    const node = this.map.get(key);
    const prev = node.prev;
    const next = node.next;
    if (!prev) {
      this.list.popFront();
      return;
    }
    if (!next) {
      this.list.popBack();
      return;
    }
    prev.next = next;
    next.prev = prev;
    this.list.length--;
  }
}

module.exports = LRUCache;
