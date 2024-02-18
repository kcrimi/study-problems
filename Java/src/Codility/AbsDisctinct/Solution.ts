function solution(A: number[]): number {
    // Implement your solution here
    const absA = A.map((val) => Math.abs(val))
    const set = new Set(absA)
    return set.size
}
