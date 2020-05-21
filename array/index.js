/*
<===============Implement Array===============>
*/

class MyArray {
  constructor(capacity = 0) {
    this.array = new Array(capacity)
  }
  //size(): Return number of items are currently stored in array - O(1)
  size() {
    let size = 0
    for (let i = 0; i < this.array.length; i++) {
      if(this.array[i] == 0 || !!this.array[i]) {
        size++
      }
    }
    return size
  }
  // capacity(): Return number of items array can hold - O(1)
  capacity() {
    return this.array.length
  }
  // isEmpty(): If array is empty, return true. Otherwise, return false - O(1)
  isEmpty() {
    return !this.size()
  }
  // itemAt(index): Return item at given index - O(1)
  itemAt(index) {
    return this.array[index]
  }
  // append(item):  Append given item to the end of array - O(1) amortized
  append(item) {
    const size = this.size()
    const capacity = this.capacity()
    if (size === capacity) {
      const newArray = [...this.array]
      newArray.length = capacity * 2
      newArray[capacity] = item
      this.array = newArray
    } else {
      this.array[size] = item
    }
  }

  // insert(item, index): Insert item at given index - O(n)
  insert(item, index) {
    const size = this.size()
    const capacity = this.capacity()
    
    if (size === capacity) {
      const newArray = [...this.array]
      newArray.length = capacity * 2
      
      for(let i = size; i >= index; i--) {
        newArray[i] = newArray[i - 1]
      }
      newArray[index] = item

      this.array = newArray
    } else {
      if (index >= size) {
        this.append(item)
        return
      }
      for(let i = size; i >= index; i--) {
        this.array[i] = this.array[i - 1]
      }
      this.array[index] = item
    }
  }

  // pop(): Remove last item and return its value - O(1) amortized
  pop() {
    const size = this.size()
    const capacity = this.capacity()
    const lastItem = this.array[size - 1]
    this.array[size - 1] = undefined
    return lastItem
  }
  // removeAt(index): Remove item at given index and return its value O(n)
  removeAt(index) {
    const size = this.size()
    let removedItem = this.array[index]
    if (index === 'undefined') return
    if (index === size - 1) this.pop() 

    for (let i = index; i < size; i++) {
      this.array[i] = this.array[i + 1]
    }
    return removedItem
  }
}

// const newArray = new MyArray()
// newArray.append(5)
// newArray.append(6)
// newArray.append(7)
// newArray.append(7)
// newArray.insert(10, 2)
// newArray.removeAt(0)
// newArray.insert(4, 1)
// console.log(newArray.isEmpty())
// console.log(newArray.array)
