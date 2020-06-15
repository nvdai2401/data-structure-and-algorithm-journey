/**
 * Test input:
 * A heap with priority:
 *          2(1200)
 *        /       \
 *      5(213)     1(312)
 *     /  \       /  \
 *    8    9     6   100
 *   (99) (100) (97) (123)          
 */

const { PriorityQueue } = require('../priority-queue')
describe('PriorityQueue', () => {
  let priorityQueue
  beforeEach(() => {
    priorityQueue = new PriorityQueue()
    expect(priorityQueue.heapContainer.length).toBe(0)
    priorityQueue.add(9, 100)
    priorityQueue.add(8, 99)
    priorityQueue.add(6, 97)
    priorityQueue.add(2, 1200)
    priorityQueue.add(5, 213)
    priorityQueue.add(1, 312)
    priorityQueue.add(100, 123)
  })

  it('should add an item correctly', () => {
    expect(priorityQueue.heapContainer.join(', ')).toBe('2, 5, 1, 8, 9, 6, 100')
    expect(priorityQueue.extractMax()).toBe(2)
  })

  it('should extract max item correctly', () => {
    expect(priorityQueue.extractMax()).toBe(2)
    expect(priorityQueue.extractMax()).toBe(1)
  })
})