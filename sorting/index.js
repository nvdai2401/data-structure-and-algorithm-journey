class Sorting {
  constructor(items) {
    this.items = items
  }

  bubbleSort() {
    for (let i = 0; i < this.items.length - 1; i++) {
      let swapped = false
      for (let j = 0; j < this.items.length - 1 - i; j++) {
        if (this.items[j] > this.items[j + 1]) {
          this.__swap(j, j + 1)
          swapped = true
        }
      }
      if (!swapped) break
    }
  }

  selectionSort() {
    let minIndex
    for (let i = 0; i < this.items.length - 1; i++) {
      minIndex = i
      for (let j = i + 1; j < this.items.length; j++) {
        if (this.items[j] < this.items[minIndex]) {
          minIndex = j
        }
      }
      this.__swap(i, minIndex)
    }
  }

  insertionSort() {
    for (let i = 1; i < this.items.length; i++) {
      let item = this.items[i]
      let insertAt = i
      let j = i - 1

      while (j >= 0 && this.items[j] > item) {
        this.items[j + 1] = this.items[j]
        j--
      }
      insertAt = j + 1
      this.items[insertAt] = item
    }
  }

  heapSort() {
    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      this.__maxHeapify(i, this.items.length)
    }

    for (let i = this.items.length - 1; i > 0; i--) {
      this.__swap(0, i)
      this.__maxHeapify(0, i - 1)
    }
  }

  __maxHeapify(startIndex, endIndex) {
    while (true) {
      let largest = startIndex
      let left = 2 * startIndex + 1
      let right = 2 * startIndex + 2

      if (left < endIndex && this.items[left] > this.items[largest]) {
        largest = left
      }
  
      if (right < endIndex && this.items[right] > this.items[largest]) {
        largest = right
      }

      if (largest === startIndex) break
      this.__swap(startIndex, largest)
      startIndex = largest
    }
  }

  __swap(firstIndex, secondIndex) {
    const temp = this.items[firstIndex]
    this.items[firstIndex] = this.items[secondIndex]
    this.items[secondIndex] = temp
  }
}

module.exports = Sorting