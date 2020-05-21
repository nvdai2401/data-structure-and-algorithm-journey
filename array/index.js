class MyArray {
  constructor() {
    this.array = []
  }
  //size(): Return number of items are currently stored in array - O(1)
  size() {
    return this.array.length
  }
  // capacity(): Return number of items array can hold - O(1)
  capacity() {
    return Math.pow(2, 32) - 1
  }
  // isEmpty(): If array is empty, return true. Otherwise, return false - O(1)
  isEmpty() {
    return !this.array.length
  }
  // itemAt(index): Return item at given index - O(1)
  itemAt(index) {
    return this.array[index]
  }
  // append(item):  Append given item to the end of array - O(1) amortized
  append(item) {
    this.array[this.array.length] = item
  }
  // insert(item, index): Insert item at given index - O(n)
  insert(item, index) {
    for(let i = this.array.length; i >= index; i--) {
      this.array[i] = this.array[i - 1]
    }
    this.array[index] = item
  }
  // pop(): Remove last item and return its value - O(1) amortized
  pop() {
    const lastItem = this.array[this.array.length - 1]
    this.array.length = this.array.length - 1
    return lastItem
  }
  // removeAt(index): Remove item at given index and return its value O(n)
  removeAt(index) {
    let removedItem = this.array[index]
    if (index === 'undefined') return
    if (index === this.array.length - 1) this.pop() 

    for (let i = index; i < this.array.length; i++) {
      this.array[i] = this.array[i + 1]
    } 
    this.array.length--
    return removedItem
  }
}

const newArray = new MyArray()

newArray.append(5)
newArray.append(6)
newArray.insert(4, 1)
console.log(newArray.capacity(1))
console.log(newArray.array)
