// Timeout with large numbers
function solution(A: number, B: number, K: number): number {
    var count = 0
    for (let i = Math.ceil(A / K); i * K <= B; i++) {
        count++
    }
    return count
}

// O(1)
function solution(A: number, B: number, K: number): number {
    const underA = A % K == 0 ? A/K - 1 : Math.floor(A/K)
    const underB = Math.floor(B/K)
    return underB - underA
}
