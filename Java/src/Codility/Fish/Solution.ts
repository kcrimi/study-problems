// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[], B: number[]): number {
    const biggestUpstream = new Array(A.length)
    const biggestDownstream = new Array(A.length)
    biggestDownstream[0] = B[0] == 1 ? A[0] : 0
    biggestUpstream[A.length-1] = B[A.length-1] == 0 ? A[A.length-1] : 0
    for (let i = 1; i < A.length; i++) {
        if (B[i] == 1) {
            biggestDownstream[i] = Math.max(biggestDownstream[i-1], A[i])
        } else if (A[i] > biggestDownstream[i-1]) {
            biggestDownstream[i] = 0
        } else {
            biggestDownstream[i] = biggestDownstream[i-1]
        }
        var tailIndex = A.length-1-i
        if (B[tailIndex] == 0) {
            biggestUpstream[tailIndex] = Math.max(biggestUpstream[tailIndex+1], A[tailIndex])
        } else if(A[tailIndex] > biggestUpstream[tailIndex+1]){
            biggestUpstream[tailIndex] = 0
        } else {
            biggestUpstream[tailIndex] = biggestUpstream[tailIndex+1]
        }
    }
    var survivors = 0
    for (let i = 0; i < A.length; i++) {
        if (B[i] == 0 && A[i] >= biggestDownstream[i]) {
            survivors++
        } else if (B[i] == 1 && A[i] >= biggestUpstream[i]){
            survivors++
        }
    }
    return survivors
}

// Using Stack
function solution(A: number[], B: number[]): number {
    // Implement your solution here
    const downstreamStack = []
    var survivors= 0
    for (let i = 0; i < A.length; i++) {
        if (B[i] == 0) {
            while (downstreamStack.length > 0 && A[i] > downstreamStack[0]) {
                downstreamStack.shift()
            }
            if (downstreamStack.length == 0) survivors++
        } else {
            downstreamStack.unshift(A[i])
        }
    }
    return survivors + downstreamStack.length
}
