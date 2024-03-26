

/*
A: [0, 0, 0, 1, 1]
B: [0, 0, 0]
C: [0, 0, 1]

[-100, -90, -20, -10, -2, -1, 0, 1, 3, 4, 5]
*/

function solution(A: number[], B: number[], C: number[]): number[] {
  let aI = 0
  let bI = 0
  let cI = 0
  const output = []
  while (aI < A.length || bI < B.length || cI < C.length){
    const a = aI < A.length ? A[aI] : Number.MAX_SAFE_INTEGER
    const b = bI < B.length ? B[bI] : Number.MAX_SAFE_INTEGER
    const c = cI < C.length ? C[cI] : Number.MAX_SAFE_INTEGER
    const chosen = Math.min(a, b, c)
    // add the min

    ouput.push(chosen)
    while (A.length > aI && A[aI] == chosen) aI++
    while (B.length > bI && B[bI] == chosen) bI++
    while (C.length > cI && C[cI] == chosen) cI++
  }
  return output
}
/*
aI = 3
bI = 3
cI = 2 
output = [0]
*/
