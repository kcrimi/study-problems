// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number): number {
    if (N == 1) return 1
    var d = 1
    var factors = 1
    while (d <= N / 2 ) {
        if (N % d == 0) factors++
        d++
    }
    return factors
}
