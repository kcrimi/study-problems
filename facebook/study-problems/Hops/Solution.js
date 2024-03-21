// PAsses samples but not tests

/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
function getSecondsRequired(N, F, P) {
  // Write your code here
  let time = 0
  let frogsExited = 0
  P.sort((a,b) => a-b)
  while (frogsExited < F) {
    const furthestFrog = P.shift()
    if (P.length == 0) {
      time += N - furthestFrog
      frogsExited++
      continue
    } else if (furthestFrog + 1 < P[0]){
      // move frog ahead
      time += P[0] - 1 - furthestFrog
    }
    //find next available space
    for (let jumpFrog = 0; jumpFrog < P.length; jumpFrog++) {
      if (P[jumpFrog] + 1 == N) {
        frogsExited++
        break
      } else if (jumpFrog == P.length) {
        P.push(P[P.length-1] + 1)
        break
      } else if (P[jumpFrog] + 1 < P[jumpFrog+1]) {
        P.splice(jumpFrog+1, 0, P[jumpFrog]+1)
        break
      }
    }
    time++
  }
  return time;
}


// Version 2 of the same result with clearer code

/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
function getSecondsRequired(N, F, P) {
  // Write your code here
  let time = 0
  const pads = new Array(N).fill(0)
  let furthestFrog = N
  for (let i = 0; i < F; i++) {
    pads[P[i]-1] = 1
    if (P[i] < furthestFrog) furthestFrog = P[i]
  }
  //console.log(pads)
  while (pads[N-1] < F) {
    pads[furthestFrog-1] = 0
    let jumpTo = furthestFrog
    let nextFurthest = null
    for (let i = furthestFrog; i < N; i++) {
      time++
      if (i == N-1 || nextFurthest && pads[i] == 0) {
         pads[i]++
         break
      } else if (pads[i] == 1) {
         nextFurthest = i 
         time--
      }
    }
    furthestFrog = nextFurthest
    //console.log(pads)
  }
  
  return time;
}

// All tests passed furthest frog pushes all the others

/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
function getSecondsRequired(N, F, P) {
  // Write your code here
  
  const furthestFrog = P.reduce((min, pad)=> Math.min(min,pad),N)
  const stepsToAlign = N-furthestFrog-F
  const stepsHome = F
  return stepsToAlign + stepsHome
}
