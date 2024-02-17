function solution(A: number[]): number {
    const set = new Set<number>()
    A.forEach((value) => set.add(value))
    return set.size
}
