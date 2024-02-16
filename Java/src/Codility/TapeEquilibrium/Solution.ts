// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    // Implement your solution here
    const sum: Array<number> = new Array(A.length)
    for (let i = 0; i < A.length; i++) {
        if (i == 0) {
            sum[i] = A[i]
        } else {
            sum[i] = A[i] + sum[i-1]
        }
    }
    var smallestDifference = -1
    for (let i = 0; i < A.length-1; i ++) {
        let newDiff = Math.abs(sum[sum.length-1] - sum[i] - sum[i])
        if (smallestDifference < 0 || newDiff < smallestDifference) {
            smallestDifference = newDiff
        }
    }
    return smallestDifference
}
