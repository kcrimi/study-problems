// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number): number {
    // Implement your solution here
    var longestGap = 0
    var currentGap = -1
    while (N > 0) {
        if (N % 2 == 1) {
            if (currentGap > longestGap) {
                longestGap = currentGap
            }
            currentGap = 0
            N = (N-1) / 2
        } else if (N  > 0) {
            if (currentGap >= 0) currentGap++
            N = N / 2
        }
    }
    return longestGap
}
