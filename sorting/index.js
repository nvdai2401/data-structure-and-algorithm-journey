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

  mergeSort(left = 0, right = this.items.length - 1) {
    if (left < right) {
      const middle = left + Math.floor((right - left) / 2)
      this.mergeSort(left, middle)
      this.mergeSort(middle + 1, right)
      this.__merge(left, middle, right)
    }
  }

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

  __swap(firstIndex, secondIndex) {
    const temp = this.items[firstIndex]
    this.items[firstIndex] = this.items[secondIndex]
    this.items[secondIndex] = temp
  }
}

const s = new Sorting([12, 11, 13, 5, 6, 7])
s.mergeSort()

console.log(s.items)

module.exports = Sorting