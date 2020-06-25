const RadixSort = require('../radix-sort');

describe('radix sort', () => {
  let sorting;
  beforeEach(() => {
    sort = new RadixSort();
  });

  it('should do nothing when the input is empty', () => {
    const sorting = new RadixSort([]);
    sorting.radixSort();
    expect(sorting.items.length).toBe(0);
  });

  it('should sort an array of number items correctly by ascending order', () => {
    const nums = [170, 45, 75, 90, 802, 24, 2, 66];
    const sorting = new RadixSort(nums);
    sorting.radixSort();
    expect(sorting.__toString()).toBe('2, 24, 45, 66, 75, 90, 170, 802');
  });

  it('should sort an array of string items correctly by ascending order', () => {
    const strs = [
      'aaaba',
      'dfjasdlifjai',
      'jiifjeogiejogp',
      'aabaaaa',
      'gsgj',
      'gerph',
      'aaaaaaa',
      'htjltjlrth',
      'joasdjfisdjfdo',
      'hthe',
      'aaaaaba',
      'jrykpjl',
      'hkoptjltp',
      'aaaaaa',
      'lprrjt',
    ];
    const sorting = new RadixSort(strs);
    sorting.radixSort();
    expect(sorting.__toString()).toBe(
      'aaaaaa, aaaaaaa, aaaaaba, aaaba, aabaaaa, dfjasdlifjai, gerph, gsgj, hkoptjltp, hthe, htjltjlrth, jiifjeogiejogp, joasdjfisdjfdo, jrykpjl, lprrjt',
    );
  });
});
