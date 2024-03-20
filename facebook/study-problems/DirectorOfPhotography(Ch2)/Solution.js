// Runs in O(N) instead of previous O(N+(Y-X))
/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
  // Write your code here
  const cells = C.split("")
  const counts = new Array(N+1)
  const runningCount = {
    a:0,
    b:0,
    p:0
  }
  for (let i = 0; i < cells.length; i++) {
    counts[i] = {...runningCount}
    if (cells[i]== "A"){
      runningCount.a++
    } else if (cells[i] == "B") {
      runningCount.b++
    } else if (cells[i] == "P") {
      runningCount.p++
    }
  }
  
  counts[N] = runningCount
  console.log(counts)
  let photos = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] == "A" && i >= X && i <= N-X){
      const leftPs = counts[i-X+1].p - counts[Math.max(i-Y, 0)].p
      const leftBs = counts[i-X+1].b - counts[Math.max(i-Y, 0)].b
      const rightPs = counts[Math.min(i+Y+1, N)].p - counts[i+X].p
      const rightBs = counts[Math.min(i+Y+1, N)].b - counts[i+X].b
      photos += (leftPs * rightBs) + (leftBs * rightPs)
    }
  }
  return photos;
}
