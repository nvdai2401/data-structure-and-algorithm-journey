const Sorting = require('./sorting')

class SelectionSort extends Sorting {
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
}

module.exports = SelectionSort