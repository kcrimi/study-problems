// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    const counter = new Map<number,number>()
    var dominatorI = -1
    var dominatorCount = -1
    A.forEach((value, i) => {
        let prevCount = counter.has(value) ? counter.get(value) : 0
        let count = prevCount + 1
        counter.set(value, count)
        if (count > dominatorCount) {
            dominatorI = i
            dominatorCount = count
        }
    })
    return dominatorCount > A.length / 2 ? dominatorI : -1
}
