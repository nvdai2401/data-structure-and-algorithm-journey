class PriorityQueue {
  constructor() {
    this.heapContainer = []
    this.priorities = new Map()
  }

  extractMax() {
    if (this.heapContainer.length === 0) return null
    const result = this.heapContainer[0]
    this.remove(result)
    return result
  }

  add(item, priority) {
    if (this.priorities.has(item)) {
      this.priorities.set(item, priority)
      return
    }
    this.priorities.set(item, priority)
    this.heapContainer.push(item)
    this.__heapifyUp()
    return this
  }

  remove(item) {
    const indexToRemove = this.find(item)

    if (indexToRemove === this.heapContainer.length - 1) {
      this.heapContainer.pop()
    } else {
      this.priorities.delete(this.heapContainer[indexToRemove])
      this.heapContainer[indexToRemove] = this.heapContainer.pop()

      const parent = this.__parent(indexToRemove)

      if (this.__hasLeftChild(indexToRemove) && !parent) {
        this.__heapifyDown(indexToRemove)
      } else {
        this.__heapifyUp(indexToRemove)
      }
    }
  }
  
  find(item) {
    for (let i = 0; i < this.heapContainer.length; i++) {
      if (item === this.heapContainer[i]) {
        return i
      }
    }
  }
  
  __getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }

  __getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }

  __getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  __leftChild(parentIndex) {
    return this.heapContainer[this.__getLeftChildIndex(parentIndex)]
  }

  __rightChild(parentIndex) {
    return this.heapContainer[this.__getRightChildIndex(parentIndex)]
  }

  __parent(childIndex) {
    return this.heapContainer[this.__getParentIndex(childIndex)]
  }

  __hasLeftChild(parentIndex) {
    return this.__getLeftChildIndex(parentIndex) >= 0
  }

  __hasRightChild(parentIndex) {
    return this.__getLeftChildIndex(parentIndex) >= 0
  }
  
  __hasParent(childIndex) {
    return this.__getParentIndex(childIndex) >= 0
  }

  __swap(indexOne, indexTwo) {
    const temp = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = temp
  }

  __peek() {
    if (this.heapContainer.length === 0) {
      return null
    }
    return this.heapContainer[0]
  }

  __heapifyUp(startIndex = this.heapContainer.length - 1) {
    let curIndex = startIndex

    while (this.__hasParent(curIndex)) {
      const parentIndex = this.__getParentIndex(curIndex)
      if (this.__comparePriority(this.heapContainer[parentIndex], this.heapContainer[curIndex]) === 1) break
      this.__swap(curIndex, parentIndex)
      curIndex = parentIndex
    }
  }

  __heapifyDown(startIndex = 0) {
    let curIndex = startIndex
    let nextIndex = null

    while (this.__hasLeftChild(curIndex)) {
      if (this.__hasRightChild(curIndex)) {
        nextIndex = this.__getRightChildIndex(curIndex)
      } else {
        nextIndex = this.__getLeftChildIndex(curIndex)
      }

      if (!this.heapContainer[nextIndex]) return
      if (this.__comparePriority(this.heapContainer[curIndex], this.heapContainer[nextIndex]) === 1) break

      this.__swap(curIndex, nextIndex)
      curIndex = nextIndex
    }
  }

  __comparePriority(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) return 0
    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1
  }
}

module.exports = { PriorityQueue }