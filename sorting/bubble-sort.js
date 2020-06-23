const Sorting = require('./sorting')

class BubbleSort extends Sorting {
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
}

module.exports = BubbleSort