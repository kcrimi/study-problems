//Q2: Find dot product of two sparse vectors
// given two vectors a and b, the dot product is a1*b1 + a2*b2 + ... + aN*bN
// A sparse vector is one that has many zero/empty values
//two fold question:
//1. What is a good way to store the vector in an optimized form
//2. Perform dot product

function dotProduct(a: number[], b: number[]): number {
  const indices = []
  let aI = 0
  let bI = 0
  while (aI < a.length && bI < b.length) {
    if (a[aI] != 0 && b[bI] != 0) indices.push(aI)
  }
  return indices.reduce((sum, i) => {
    return sum + (a[i] * b[i])
  }, 0)

  // new version
  // Time = O(A+B)
  // Space = O(A+B)
  const optA = optimize(a)
  const optB = optimize(b)
  let aI = 0
  let bI = 0
  let dotProd = 0
  while (aI < a.length && bI < b.length) {
    if (optA[aI][0] == optB[bI][0]){
      dotProd += optA[aI][1] * optB[bI][1]
      aI++
      bI++
    } else if (optA[aI][0] < optB[bI][0]) {
      aI++
    } else {
      bI++
    }
  }
  return dotProd
}

function optimize(vector: number[]): Array<Array<number>> {
  let optimized = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] != 0) { 
      optimized.push([i, a[i]])
    }
  }
  return optimized
}

/*
a = [1, 0 , 0, 3, 5]
b = [0, 1, -1, 2]

optA = [[0, 1], [3, 3], [4, 5]]
optB = [[1,1], [2,-1], [3,2]]

aI = 2
bI = 3
dotProd = 6

*/
