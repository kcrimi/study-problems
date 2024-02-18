// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//[-8, 10, 20, -5, -7, -4] 38 - 30
[5, 5, 5] -- 0
function solution(A: number[]): number {
    const maxLeft = new Array(A.length)
    const maxRight = new Array(A.length)
    maxLeft[0] = 0
    maxRight[A.length-1] = 0
    for (let i = 1; i < A.length; i++) {
        const tail = A.length-1-i
        maxLeft[i] = Math.max(A[i], A[i] + maxLeft[i-1])
        maxRight[tail] = Math.max(A[tail], A[tail] + maxRight[tail+1])
    }
    // console.log({maxLeft, maxRight})
    var globalMax = Number.MIN_SAFE_INTEGER
    for (let i = 1; i < A.length-1; i++) {
        const max = maxLeft[i] + maxRight[i] - 2 * A[i]
        // console.log({max, globalMax})
        if (max > globalMax) globalMax = max
    }
    return globalMax
}
