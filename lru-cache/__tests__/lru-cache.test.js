const LRUCache = require('../lru-cache');

describe('LRUCache', () => {
  let lruCache;

  beforeEach(() => {
    lruCache = new LRUCache();
    lruCache.put(1, 100);
    lruCache.put(2, 200);
    lruCache.put(3, 300);
    lruCache.put(4, 400);
    lruCache.put(5, 500);
    lruCache.put(6, 600);
    lruCache.put(7, 700);
    lruCache.put(8, 800);
  });

  it('should put a node to the list correctly', () => {
    expect(lruCache.list.length).toBe(8);
    expect(lruCache.map.size).toBe(8);
  });

  it('should remove least recently used node when the list is full', () => {
    expect(lruCache.list.head.key).toBe(8);
    expect(lruCache.list.tail.key).toBe(1);
    lruCache.put(9, 900);
    expect(lruCache.list.length).toBe(8);
    expect(lruCache.map.size).toBe(8);
    expect(lruCache.list.head.key).toBe(9);
    expect(lruCache.list.tail.key).toBe(2);
  });

  it('should move the node to the head of the list when adding a existing node with the same key', () => {
    lruCache.put(1, 1000);
    expect(lruCache.list.head.key).toBe(1);
    expect(lruCache.list.tail.key).toBe(2);
  });

  it('should move the node to the head of the list when getting', () => {
    lruCache.get(1);

    expect(lruCache.list.head.key).toBe(1);
    expect(lruCache.list.tail.key).toBe(2);
  });
});
