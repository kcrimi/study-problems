// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X: number, Y: number, D: number): number {
    // Implement your solution here
    const distance = Y - X
    return Math.ceil(distance / D)
}
