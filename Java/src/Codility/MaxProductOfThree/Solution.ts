function solution(A: number[]): number {
    A.sort()
    return Math.max(A[A.length-1] * A[A.length-2] * A[A.length-3],
        A[0] * A[1] * A[A.length-1])

}
