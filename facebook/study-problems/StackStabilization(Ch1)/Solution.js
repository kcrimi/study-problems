
/**
 * @param {number} N
 * @param {number[]} R
 * @return {number}
 */
function getMinimumDeflatedDiscCount(N, R) {
  // Write your code here
  let maxSize = Number.MAX_SAFE_INTEGER
  let deflated = 0
  for (let i = R.length -1; i >= 0; i--) {
    if (maxSize == 1) return -1
    if (R[i] < maxSize) {
      maxSize = R[i]
    } else {
      // deflate ring
      maxSize--
      deflated++
    }
  }
  return deflated;
}
