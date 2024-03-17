
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
