// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    const minLeft = new Array(A.length)
    const maxRight = new Array(A.length)
    minLeft[0] = A[0]
    maxRight[A.length-1] = A[A.length-1]
    for (let i = 1; i < A.length; i++){
        minLeft[i] = Math.min(A[i], minLeft[i-1])
        maxRight[A.length - 1 - i] = Math.max(A[A.length - 1 - i], maxRight[A.length-i])
    }
    var maxProfit = 0
    for (let i = 0; i < A.length; i++) {
        let profit = maxRight[i] - minLeft[i]
        if (profit > maxProfit) {
            maxProfit = profit
        }
    }
    return maxProfit
}
