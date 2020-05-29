const { Node, DoublyLinkedList } = require('../doubly-linked-list')

class ChainingHashTable {
  constructor(capacity = 8) {
    this.arr = new Array(capacity)
    this.capacity = capacity
    this.size = 0
  }

  hash(key) {
    return key % this.capacity
  }

  insert(value, key) {
    const index = this.hash(key)
    if (!this.arr[index]) {
      const linkList = new DoublyLinkedList()
      linkList.pushFront(value, key)
      this.arr[index] = linkList
      this.size++
    } else {
      const isExisting = this.search(key)
      if (isExisting) {
        let cur = this.arr[index].tail
        while (cur) {
          if (cur.key === key) {
            cur.value = value
            break
          }
          cur = cur.prev
        }
      } else {
        this.arr[index].pushBack(value, key)
      }
    }
  }

  delete(key) {
    const index = this.hash(key)
    if (this.arr[index].length > 1) {
      let cur = this.arr[index].tail
      let count = 0
      
      while (cur) {
        if (cur.value.value === key) {
          let len = this.arr[index].length
          this.arr[index].removeAt(len - count - 1)
          break
        }
        count++
        cur = cur.prev
      }
    } else {
      this.arr[index] = undefined
      this.size--
    }
  }

  search(key) {
    if (!this.size) return null
    const index = this.hash(key)
    
    if (!this.arr[index]) {
      return null
    } else {
      let cur = this.arr[index].tail
      while (cur) {
        if (cur.key === key) {
          return cur.value
        }
        cur = cur.prev
      }
    }
    return null
  }

  extendSize() {
    this.capacity *= 2
    let newArr = []
    for (let i = 0; i < this.size; i++) {
      if (this.arr[i]) {
        const linkList = new DoublyLinkedList()
        let cur = this.arr[i].head
        while (cur) {
          
          cur = cur.next
        }
      }
    }

  }
}

const HT = new ChainingHashTable()
HT.insert(10, 3)
HT.insert(10, 11)
HT.insert(12, 11)
// HT.insert(11, 10)
// HT.insert(11, 10)
// HT.insert(11, 10)
// HT.insert(11, 10)
// HT.insert(12)
// HT.insert(13)
// HT.insert(14)

// HT.delete(11)
// console.log(HT.search(3))
console.log(HT)

module.exports = { ChainingHashTable }