// Queue solution fails last performance test
/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  const eaten = []
  let totalEaten = 0
  for (let i = 0; i < N; i++) {
    if (!eaten.includes(D[i])) {
      totalEaten++
      eaten.push(D[i])
      if (eaten.length > K) eaten.shift()
    }
    console.log({totalEaten, eaten})
  }
  return totalEaten;
}



/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  const recent = new Map()
  let eaten = 0
  for (let i = 0; i < N; i++) {
    if (!recent.has(D[i]) || eaten - recent.get(D[i]) >= K){
      eaten++
      recent.set(D[i], eaten)
    }
  }
  return eaten;
}
