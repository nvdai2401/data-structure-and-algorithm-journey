class Sorting {
  constructor(items) {
    this.items = items
  }

  bubbleSort() {
    let swapped = false
    for (let i = 0; i < this.items.length - 1; i++) {
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

  __swap(firstIndex, secondIndex) {
    const temp = this.items[firstIndex]
    this.items[firstIndex] = this.items[secondIndex]
    this.items[secondIndex] = temp
  }
}

module.exports = Sorting