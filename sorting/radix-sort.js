const Sorting = require('./sorting');

class RadixSort extends Sorting {
  radixSort() {
    const max = this.__findMax();
    let exp = 1;

    while (exp < max) {
      this.__countingSort(exp);
      exp *= 10;
    }
  }

  __countingSort(exp) {
    const count = new Array(10).fill(0);
    const output = [];

    for (let item of this.items) {
      count[Math.floor(item / exp) % 10] += 1;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = this.items.length - 1; i >= 0; i--) {
      output[count[Math.floor(this.items[i] / exp) % 10] - 1] = this.items[i];
      count[Math.floor(this.items[i] / exp) % 10]--;
    }
    this.items = output;
  }

  __findMax() {
    let max = this.items[0];

    for (let i = 1; i < this.items.length - 1; i++) {
      if (max < this.items[i + 1]) {
        max = this.items[i + 1];
      }
    }

    return max;
  }
}

module.exports = RadixSort;
