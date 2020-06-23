const Sorting = require('./sorting')

class InsertionSort extends Sorting {
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
}

module.exports = InsertionSort