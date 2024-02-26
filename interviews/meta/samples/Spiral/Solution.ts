const _ = require('lodash');

function spiral(N: number): Array<Array<number>> {
  const output = Array.from({length:N},() => new Array(N).fill(0))
  let column = 0
  let row = 0
  const directionRow = [1,0,-1, 0]
  const directionColumn = [0,1,0,-1]
  let dir = 0
  for (let i = 1; i <= N*N; i++) {
    output[column][row] = i
    column += directionColumn[dir]
    row += directionRow[dir]
    if (column >= N || row >= N || column < 0 || row < 0 
      || output[column][row] > 0) {
        column -= directionColumn[dir]
        row -= directionRow[dir]
        dir = (dir + 1) % 4
        column += directionColumn[dir]
        row += directionRow[dir]
    } 
  }
  return output
}


console.log(spiral(4))
