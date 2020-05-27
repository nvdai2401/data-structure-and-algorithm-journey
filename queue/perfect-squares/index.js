var numSquares = function(n) {
  if (n < 0) return -1
  
  let queue = []
  let count = -1
  
  queue.push(0)
  
  while(queue.length) {
    count++
    let size = queue.length
    
    for (let i = 0; i < size; i++) {
      const cur = queue[i]
      if (cur === n) return count
      
      for (let j = 1; j * j <= n; j++) {
        queue.push(j * j + cur)
      }
    }
    queue.shift()
  }

  return -1
};

console.log(numSquares(7168))