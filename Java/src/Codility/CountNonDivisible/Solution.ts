//Times out on large

function solution(A: number[]): number[] {
    const nonDivisors = new Array(A.length)
    for (let i = 0; i < A.length; i++) {
        var count = 0
        for (let j= 0; j < A.length; j++){
            if (i == j) continue
            if (A[j] > A[i] || A[i] % A[j] != 0) count++
        }
        nonDivisors[i] = count
    }
    return nonDivisors
}
