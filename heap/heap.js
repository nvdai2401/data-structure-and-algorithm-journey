class Heap {
  constructor() {
    this.heapContainer = []
    this.priorities = new Map()
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) >= 0
  }

  hasRightChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) >= 0
  }
  
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  swap(indexOne, indexTwo) {
    const temp = this.heapContainer[indexOne]
    this.heapContainer[indexOne] = this.heapContainer[indexTwo]
    this.heapContainer[indexTwo] = temp
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null
    }
    return this.heapContainer[0]
  }

  add(item) {
    this.heapContainer.push(item)
    this.heapifyUp()
    return this
  }


  heapifyUp(startIndex) {
    let curIndex = startIndex || this.heapContainer.length - 1
    while (this.hasParent(curIndex)) {
      const parentIndex = this.getParentIndex(curIndex)
      if (this.heapContainer[curIndex] <= this.heapContainer[parentIndex]) break
      this.swap(curIndex, parentIndex)
      curIndex = parentIndex
    }
  }

  // heapifyDown(startIndex) {
  //   let curIndex = startIndex
  //   let nextIndex = null

  //   while (this.hasLeftChild(curIndex)) {
  //     if (this.hasRightChild(curIndex)) {
  //       nextIndex = this.getRightChildIndex(curIndex)
  //     } else {
  //       nextIndex = this.getLeftChildIndex(curIndex)
  //     }
  //     if (this.heapContainer[curIndex] >= this.heapContainer[nextIndex]) break

  //     this.swap(curIndex, nextIndex)
  //     curIndex = nextIndex
  //   }
  // }
}

const heap = new Heap()
heap.add(9)
heap.add(8)
heap.add(6)
heap.add(2)
heap.add(5)
heap.add(1)
heap.add(100)

console.log(heap.rightChild(0))
console.log(heap)