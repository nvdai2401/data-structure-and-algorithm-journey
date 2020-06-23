const Sorting = require('./sorting')

class HeapSort extends Sorting {
  // sort the array by order ascending or descending
  heapSort(order = 'ascending') {
    let heapify
    if (order === 'ascending') {
      heapify = this.__maxHeapify.bind(this)
    } else {
      heapify = this.__minHeapify.bind(this)
    }

    for (let i = Math.floor(this.items.length / 2) - 1; i >= 0; i--) {
      heapify(i, this.items.length)
    }
 
    for (let i = this.items.length - 1; i > 0; i--) {
      this.__swap(0, i)
      heapify(0, i)
    }
  }

  // build max heap
  __maxHeapify(startIndex, endIndex) {
    let largest = startIndex
    let left = 2 * startIndex + 1
    let right = 2 * startIndex + 2
    
    if (left < endIndex && this.items[left] > this.items[largest]) {
      largest = left
    }
    
    if (right < endIndex && this.items[right] > this.items[largest]) {
      largest = right
    }
    
    if (startIndex !== largest) {
      this.__swap(largest, startIndex)
      this.__maxHeapify(largest, endIndex)
    }
  }
  
  // build min heap
  __minHeapify(startIndex, endIndex) {
    let smallest = startIndex
    let left = 2 * startIndex + 1
    let right = 2 * startIndex + 2

    if (left < endIndex && this.items[left] < this.items[smallest]) {
      smallest = left
    }

    if (right < endIndex && this.items[right] < this.items[smallest]) {
      smallest = right
    }
    
    if (smallest !== startIndex) {
      this.__swap(smallest, startIndex)
      this.__minHeapify(smallest, endIndex)
    }
  }
}

module.exports = HeapSort