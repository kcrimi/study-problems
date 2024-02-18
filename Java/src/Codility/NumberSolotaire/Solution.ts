function solution(A: number[]): number {
    const maxScores = new Array(A.length)
    maxScores[0] = A[0]
    for (let i = 1; i < A.length; i++) {
        var maxScore = Number.MIN_SAFE_INTEGER
        for (let j = i-1; j >= 0 && j >= i - 6; j--) {
            maxScore = maxScore ? Math.max(maxScore, maxScores[j]) : maxScores[j]
        }
        maxScores[i] = maxScore + A[i]
    }
    return maxScores[A.length - 1]
}
