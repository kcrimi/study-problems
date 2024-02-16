// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X: number, A: number[]): number {
    const positions = Array.from({length: X}, (_, i) => i + 1)
    console.log(positions)
    const set: Set<number> = new Set<number>(positions)
    for (let i = 0; i < A.length; i++) {
        set.delete(A[i])
        if (set.size == 0) return i
    }
    return -1
}
