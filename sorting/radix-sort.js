const Sorting = require('./sorting');

const CHAR_CODE_RANGE = 256;

class RadixSort extends Sorting {
  radixSort() {
    if (this.items.length === 0) return;
    const isNumber = Number.isInteger(this.items[0]);
    if (isNumber) {
      this.radixSortNumber();
    } else {
      this.radixSortString();
    }
  }

  radixSortNumber() {
    const max = this.__findMax();
    let exp = 1;

    while (exp < max) {
      this.__countingSort(exp);
      exp *= 10;
    }
  }

  radixSortString() {
    const maxLength = this.__findMaxLength();
    let index = maxLength - 1;

    while (index >= 0) {
      this.__countingSortString(index);
      index--;
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

  __countingSortString(index) {
    const count = new Array(CHAR_CODE_RANGE).fill(0);
    const output = [];

    for (let str of this.items) {
      let cIndex = index < str.length ? str[index].charCodeAt() : 0;
      count[cIndex] += 1;
    }

    for (let i = 1; i < CHAR_CODE_RANGE; i++) {
      count[i] += count[i - 1];
    }

    for (let i = this.items.length - 1; i >= 0; i--) {
      let cIndex =
        index < this.items[i].length ? this.items[i][index].charCodeAt() : 0;
      output[count[cIndex] - 1] = this.items[i];
      count[cIndex]--;
    }
    this.items = output;
  }

  __findMaxLength() {
    let maxLength = this.items[0].length;

    for (let i = 1; i < this.items.length - 1; i++) {
      if (maxLength < this.items[i + 1].length) {
        maxLength = this.items[i + 1].length;
      }
    }

    return maxLength;
  }
}

module.exports = RadixSort;
