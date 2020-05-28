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

  insert(value) {
    const index = this.hash(value)
    const node = new Node(value)
    if (!this.arr[index]) {
      const linkList = new DoublyLinkedList()
      linkList.pushBack(node)
      this.arr[index] = linkList
      this.size++
    } else {
      this.arr[index].pushBack(node)
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
    if (!this.length) return null
    const index = this.hash(key)
    const cur = this.arr[index].tail
    
    while (cur) {
      if (cur.value.value === key) {
        return cur
      }
      cur = cur.prev
    }
    return null
  }
}

const HT = new ChainingHashTable()
HT.insert(3)
HT.insert(11)
HT.insert(11)
HT.insert(11)
HT.insert(11)
HT.insert(11)
HT.insert(12)
HT.insert(13)
HT.insert(14)

HT.delete(11)
console.log(HT)

module.exports = { ChainingHashTable }