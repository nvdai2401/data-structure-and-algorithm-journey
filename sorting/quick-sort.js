const Sorting = require('./sorting')

class QuickSort extends Sorting {
  quickSort(left = 0, right = this.items.length - 1) {
    if (left < right) {
      const pivot = this.__partition(left, right)
      this.quickSort(left, pivot - 1)
      this.quickSort(pivot + 1, right)
    }
  }
  
  __partition(low, high) {
    const pivot = this.items[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
      if (this.items[j] < pivot) {
        i++
        this.__swap(i, j)
      }
    }
    this.__swap(i + 1, high)
    return i + 1
  }
}

module.exports = QuickSort