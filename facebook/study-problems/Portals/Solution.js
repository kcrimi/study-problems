
/**
 * @param {number} R
 * @param {number} C
 * @param {string[][]} G
 * @return {number}
 */
function getSecondsRequired(R, C, G) {
  // Write your code here
  // Scan grid
  const portals = new Map()
  let start = []
  for (let i = 0; i < G.length; i++) {
    for (let j = 0; j < G[0].length; j++) {
      if (["E","#","."].includes(G[i][j])) {
        continue
      } else if (G[i][j] == "S"){
        start = [i,j]
      } else {
        if (!portals.has(G[i][j])) {
          portals.set(G[i][j], [[i,j]])
        } else {
          portals.get(G[i][j]).push([i,j])
        }
      }
    }
  }
  
  const memo = Array.from(Array(G.length), () => Array(G[0].length).fill(-1))
  const stack = [start]
  memo[start[0]][start[1]] = 0
  const directions = [[-1, 0],[0, -1],[0,1],[1,0]]
  while (stack.length > 0) {
    const [i,j] = stack.shift()
    const spacesToSearch = directions.map(([iDiff, jDiff]) => [i+iDiff, j+ jDiff])
    if (!["S","E","#","."].includes(G[i][j]) ){
      //Add portal spaces
      portals.get(G[i][j]).forEach((portal) => spacesToSearch.push(portal))
    }
    for (let [newI, newJ] of spacesToSearch) {
      if (newI >= G.length || newI < 0 || newJ >= G[0].length || newJ < 0 
          || G[newI][newJ] == "#" || memo[newI][newJ] >= 0) {
        //Don't search this space
        continue
      } else if (G[newI][newJ] == "E"){
        return memo[i][j]+1
      } else {
        // Search normal space
        memo[newI][newJ] = memo[i][j] + 1
        stack.push([newI, newJ])
      } 
    }
    
  }
  console.log(memo)
  return -1;
}
