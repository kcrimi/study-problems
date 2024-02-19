function solution(N: number): number {
    const sqrt = Math.sqrt(N)
    if (Number.isInteger(sqrt)) return sqrt * 4

    var sideA = Math.floor(sqrt)
    while (N % sideA != 0) {
        sideA--
    }
    return 2 * (sideA + (N/sideA))
}
