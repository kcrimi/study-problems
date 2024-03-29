//timeout on large points
function solution(A: number[], B: number[]): number {
    var maxSegments = 0
    var first = 0
    while (first + maxSegments < A.length) {
        var currentEnd = -1
        var segments = 0
        for (let i = first; i < A.length; i++) {
            if (A[i] > currentEnd) {
                segments++
                currentEnd = B[i]
            }
        }
        maxSegments = Math.max(maxSegments, segments)
        first++
    }
    return maxSegments
}

//Simplified, O(n)
function solution(A: number[], B: number[]): number {
    var maxSegments = 0
    var currentEnd = -1
    for (let i = 0; i < A.length; i++) {
        if (A[i] > currentEnd) {
            maxSegments++
            currentEnd = B[i]
        }
    }
    return maxSegments
}
