
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
  let artShots = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] == "A") {
      let leftPs = 0
      let leftBs = 0
      for (let j = i-X; j >= Math.max(0, i-Y);j--) {
        if (cells[j] == "P") leftPs++
        if (cells[j] == "B") leftBs++
      }
      let rightPs = 0
      let rightBs = 0
      for (let j = i+X; j <= Math.min(cells.length-1, i+Y);j++) {
        if (cells[j] == "P") rightPs++
        if (cells[j] == "B") rightBs++
      }
      console.log({i, leftPs, leftBs, rightPs, rightBs})
      artShots += (leftPs * rightBs) + (leftBs * rightPs)
    }
  }
  return artShots;
}
