
/**
 * @param {number} N
 * @param {number[]} V
 * @param {number} C
 * @param {number} S
 * @return {number}
 */
function getMaxExpectedProfit(N, V, C, S) {
  let maxProfit = 0
  const stack = [[0, 0, 0]]
  
  while (stack.length > 0) {
    const [index, accumulated, profit] = stack.pop()
    if (profit > maxProfit) maxProfit = profit
    if (index == V.length) continue
    // If you don't take value
    stack.push([index+1, accumulated * (1-S) + V[index], profit])
    // If you do take value
    const takeValue = (accumulated * (1-S)) + V[index] - C
    if (takeValue > 0) stack.push([index+1, 0,  takeValue + profit])
  }
  
  return maxProfit
}
