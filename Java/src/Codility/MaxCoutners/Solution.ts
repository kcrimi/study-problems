
// timeout on large operations
function solution(N: number, A: number[]): number[] {
    // Implement your solution here
    const counters = Array(N).fill(0)
    var max = 0;
    A.forEach((x) => {
        if (x > N) {
            counters.fill(max)
        } else {
            counters[x-1]++
            if (counters[x-1] > max) {
                max = counters[x-1]
            }
        }
    })
    return counters
}

// Reduce space with map
function solution(N: number, A: number[]): number[] {
    // Implement your solution here
    var counters = new Map<number, number>();
    var totalMax = 0
    var max = 0
    A.forEach((x) => {
        if (x > N) {
            totalMax += max
            max = 0
            counters = new Map<number, number>()
        } else {
            let oldCount = counters.get(x) ?? 0
            let newCount = oldCount + 1
            counters.set(x, newCount)
            if (oldCount + 1 > max) {
                max = newCount
            }
        }
    })
    const output = Array<number>(N)
    for (let i = 0; i < N; i++) {
        let counter = counters.get(i+1) ?? 0
        output[i] = totalMax + counter
    }
    return output
}
