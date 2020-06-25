const MergeSort = require('../merge-sort');
const { arrayOfNumber, arrayOfString } = require('../../utils/shared');

describe('merge sort', () => {
  it('should do nothing when the input is empty', () => {
    const sorting = new MergeSort([]);
    sorting.mergeSort();
    expect(sorting.items.length).toBe(0);
  });

  it('should sort an array of number items correctly by ascending order', () => {
    const sorting = new MergeSort(arrayOfNumber);
    sorting.mergeSort();
    expect(sorting.__toString()).toBe('2, 24, 45, 66, 75, 90, 170, 802');
  });

  it('should sort an array of string items correctly by ascending order', () => {
    const sorting = new MergeSort(arrayOfString);
    sorting.mergeSort();
    expect(sorting.__toString()).toBe(
      'aaaaaa, aaaaaaa, aaaaaba, aaaba, aabaaaa, dfjasdlifjai, gerph, gsgj, hkoptjltp, hthe, htjltjlrth, jiifjeogiejogp, joasdjfisdjfdo, jrykpjl, lprrjt',
    );
  });
});
