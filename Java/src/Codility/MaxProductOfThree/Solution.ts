function solution(A: number[]): number {
    A.sort((a,b)=> a-b)
    return Math.max(A[A.length-1] * A[A.length-2] * A[A.length-3],
        A[0] * A[1] * A[A.length-1])

}
