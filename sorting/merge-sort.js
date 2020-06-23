const Sorting = require('./sorting')

class MergeSort extends Sorting {
  mergeSort(left = 0, right = this.items.length - 1) {
    if (left < right) {
      const middle = left + Math.floor((right - left) / 2)
      this.mergeSort(left, middle)
      this.mergeSort(middle + 1, right)
      this.__merge(left, middle, right)
    }
  }

  __merge(left, middle, right) {
    let i, j, k
    const n1 = middle - left + 1
    const n2 = right - middle
    let L = [], R = []

    for (i = 0; i < n1; i++) {
      L[i] = this.items[left + i]
    }
    for (j = 0; j < n2; j++) {
      R[j] = this.items[middle + 1 + j]
    }

    i = 0
    j = 0
    k = left
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        this.items[k] = L[i]
        i++
      } else {
        this.items[k] = R[j]
        j++
      }
      k++
    }

    while (i < n1) {
      this.items[k] = L[i]
      i++
      k++
    }

    while (j < n2) {
      this.items[k] = R[j]
      j++
      k++
    }
  }
}

module.exports = MergeSort