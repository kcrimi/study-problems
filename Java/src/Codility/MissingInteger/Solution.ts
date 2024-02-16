// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    // Implement your solution here
    const counter = new Set<number>()
    A.forEach((value) => {
        if (value > 0) {
            if (!counter.has(value)){
                counter.add(value)
            }
        }
    })
    var i = 1
    while (true) {
        if (!counter.has(i)) {
            return i
        }
        i++
    }
}
