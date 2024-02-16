// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    // Implement your solution here
    const a = Array.from({length: A.length}, (_,i) => i+1)
    const set = new Set(a)
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) {
            set.delete(A[i])
        } else {
            return 0
        }
    }
    return 1
}
