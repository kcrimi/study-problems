// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K: number, M: number, A: number[]): number {
    var upperBound = M * A.length
    var lowerBound = 0
    var minLargeSum = upperBound
    while (upperBound > lowerBound) {
        const midpoint = Math.ceil((upperBound + lowerBound) / 2)
        // console.log ({upperBound, lowerBound, midpoint})
        // Check if can make make true with K blocks
        var blocks = 1
        var currentBlock = 0
        let tooLow = false
        for (let i = 0; i < A.length; i++) {
            if (currentBlock + A[i] > midpoint){
                blocks++
                if (blocks > K || A[i] > midpoint) {
                    // sum too low, need too many blocks
                    lowerBound = midpoint +1
                    tooLow = true
                    break
                }
                currentBlock = A[i]
            } else {
                currentBlock += A[i]
            }
        }
        if (!tooLow && blocks <= K) { 
            minLargeSum = midpoint
            upperBound = midpoint-1
        }
        // console.log ({upperBound, lowerBound, midpoint})
    }
    return minLargeSum
}
