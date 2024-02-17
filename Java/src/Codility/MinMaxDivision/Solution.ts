// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K: number, M: number, A: number[]): number {
    var upperBound = M * A.length
    var lowerBound = Math.min(...A)
    var minLargeSum = upperBound
    // console.log ({upperBound, lowerBound, minLargeSum})
    while (upperBound > lowerBound) {
        const midpoint = Math.floor((upperBound + lowerBound) / 2)
        // Check if can make make true with K blocks
        var blocks = 1
        var currentBlock = 0
        let tooLow = false
        for (let i = 0; i < A.length; i++) {
            if (currentBlock + A[i] > midpoint){
                blocks++
                currentBlock = A[i]
            } else {
                currentBlock += A[i]
            }
        }
        if (blocks > K) {
            // sum too low, need too many blocks
            lowerBound = midpoint +1
        } else { 
            minLargeSum = midpoint
            upperBound = midpoint - 1
        }
        // console.log ({upperBound, lowerBound, midpoint, minLargeSum})
    }
    return minLargeSum
}
