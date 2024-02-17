// Times out
function solution(N: number, M: number): number {
    const eaten = new Set<number>()
    var toEat = 0
    while (!eaten.has(toEat)) {
        eaten.add(toEat)
        toEat  = (toEat + M) % N
    }
    return eaten.size
}

function solution(N: number, M: number): number {
    const m = M % N
    if (m==0) return 1
    var chocolates = 1
    var i = 1
    while (true) {
        if ((N*i) % m == 0) return (N*i) / m
        i++
    }
}

