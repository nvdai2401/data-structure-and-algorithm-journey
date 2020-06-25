class Sorting {
  constructor(items) {
    this.items = items;
  }

  __swap(firstIndex, secondIndex) {
    const temp = this.items[firstIndex];
    this.items[firstIndex] = this.items[secondIndex];
    this.items[secondIndex] = temp;
  }

  __toString() {
    return this.items.join(', ');
  }
}

module.exports = Sorting;
