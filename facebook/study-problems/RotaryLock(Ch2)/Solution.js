
/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */
function getMinCodeEntryTime(N, M, C) {
  // Write your code here
  let shortest = Number.MAX_SAFE_INTEGER
  const stateQ = [[1,1,0,0]]
  while (stateQ.length > 0) {
    const nextIndex = stateQ.reduce((minI, next, i) => stateQ[minI][3] < next[3] ? minI : i, 0)
    const [left,right,i,time] = stateQ[nextIndex]
    stateQ.splice(nextIndex,1)
    if (i == M) {
      shortest = Math.min(shortest, time)
    } else if (time <= shortest) {
      const next = C[i]
      //Try left
      let small = Math.min(left, next)
      let large = Math.max(left, next)
      let newTime = time + Math.min(large-small, small+N-large)
      if (newTime < shortest) stateQ.push([next,right,i+1, newTime])
      //Try right
      small = Math.min(right, next)
      large = Math.max(right, next)
      newTime = time + Math.min(large-small, small+N-large)
      if (newTime < shortest) stateQ.push([left,next,i+1, newTime])
    }
  }
  return shortest;
}
