function solution(A: number[]): number {
    A.sort()
    return A[A.length-1] * A[A.length-2] * A[A.length-3]
}
