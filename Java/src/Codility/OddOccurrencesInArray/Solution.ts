// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    // Implement your solution here
    const set: Set<number> = new Set<number>
    A.forEach((i) => {
        if (set.has(i)) {
            set.delete(i)
        } else {
            set.add(i)
        }
    })
    
    return set.values().next().value
}
