const { Node, DoublyLinkedList } = require('../linked-list/doubly-linked-list')

const DEFAULT_CAPACITY = 8
const UPPER_LOAD_FACTOR = 0.7
const LOWER_LOAD_FACTOR = 0.25
const GROW_SHRINK_FACTOR = 2

class ChainingHashTable {
  constructor() {
    this.arr = new Array(DEFAULT_CAPACITY)
    this.capacity = DEFAULT_CAPACITY
    this.size = 0
  }

  insert(key, value) {
    const index = this.__hash(key)
    if (!this.arr[index]) {
      const linkList = new DoublyLinkedList()
      linkList.pushFront(value, key)
      this.arr[index] = linkList
      this.size++
      if (this.size === this.capacity) {
        this.__grow()
      }
      return
    }

    const isExisting = this.search(key)
    if (!isExisting) {
      this.arr[index].pushBack(value, key)
      return
    }
    let cur = this.arr[index].tail
    while (cur) {
      if (cur.key === key) {
        cur.value = value
        break
      }
      cur = cur.prev
    }
  }

  delete(key) {
    const index = this.__hash(key)
    
    if (!this.arr[index]) return
    if (this.arr[index].length === 1) {
      this.arr[index] = undefined
      this.size--
      const lowerLoadFactor = Math.floor(this.capacity / 4)
      if (this.capacity > DEFAULT_CAPACITY && this.size <= lowerLoadFactor) {
        this.__shrink()
      }
      return
    }
    
    let cur = this.arr[index].tail
    let count = 0
    while (cur) {
      if (cur.key === key) {
        let length = this.arr[index].length
        this.arr[index].removeAt(length - count - 1)
        break
      }
      count++
      cur = cur.prev
    } 
  }

  search(key) {
    if (!this.size) return null
    const index = this.__hash(key)
    
    if (!this.arr[index]) {
      return null
    }

    let cur = this.arr[index].tail
    while (cur) {
      if (cur.key === key) {
        return cur.value
      }
      cur = cur.prev
    }
  }

  // private methods
  __hash(key) {
    return key % this.capacity
  }

  __grow() {
    const newCapacity = this.capacity * GROW_SHRINK_FACTOR
    this.__rehash(newCapacity)
  }

  __shrink() {
    const newCapacity = this.capacity / GROW_SHRINK_FACTOR
    this.__rehash(newCapacity)
  }

  __rehash(newCapacity) {
    const oldCapacity = this.capacity
    const oldArr = this.arr

    this.capacity = newCapacity
    this.arr = new Array(this.capacity)
    this.size = 0

    for (let i = 0; i < oldCapacity; i++) {
      if (oldArr[i] && oldArr[i].length === 1) {
        this.insert(oldArr[i].head.key, oldArr[i].head.value)
      }

      if (oldArr[i] && oldArr[i].length > 1) {
        let cur = oldArr[i].head
        while (cur) {
          this.insert(cur.key, cur.value)
          cur = cur.next
        }
        
      }
    }
  }
}

module.exports = { ChainingHashTable }