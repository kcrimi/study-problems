// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    var eastBound = 0
    var pairs = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] == 1) {
            pairs += eastBound
            if (pairs > 1000000000) return -1
        } else {
            eastBound++
        }
    }
    return pairs
}
