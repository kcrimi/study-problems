
/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */
function getMinProblemCount(N, S) {
  // Write your code here
  let hasOdd = false
  let max = 0
  for (let i = 0; i < S.length; i++) {
    max = Math.max(max, S[i])
    hasOdd = hasOdd || S[i] % 2 == 1
  }
  let questions = Math.ceil(max / 2)
  if (hasOdd && max % 2 == 0) questions++
  
  return questions;
}
