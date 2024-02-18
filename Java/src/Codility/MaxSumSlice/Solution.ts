function solution(A: number[]): number {
    var previousMax = A[0]
    var max = A[0]
    for (let i = 1; i< A.length; i++) {
        let newMax = Math.max(A[i], A[i] + previousMax)
        if (newMax > max) max = newMax
        previousMax = newMax
    }
    return max
}
