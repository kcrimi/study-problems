
/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */
function getMinCodeEntryTime(N, M, C) {
  // Write your code here
  let seconds = 0
  let currentPos = 1
  for (let i = 0; i < C.length; i++) {
    const sameCycle = Math.abs(currentPos - C[i])
    const breakCycle = N-sameCycle
    seconds += Math.min(sameCycle, breakCycle)
    currentPos = C[i]
  }
  return seconds;
}
