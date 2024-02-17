//Times out on large ones
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

//sieve 
function solution(N: number): number {
    if (N == 1) return 1
    var d = 1
    var factors = new Set<number>()
    while (d <= Math.sqrt(N) ) {
        if (!factors.has(d) && N % d == 0) {
            factors.add(d)
            factors.add(N/d)
            let i = 2
            while (d * i <= Math.sqrt(N)){
                if (!factors.has(d*i) && N % (d*i) == 0) {
                    factors.add(d)
                    factors.add(N/(d*i))
                }
                i++
            }
        }
        d++
    }
    return factors.size
}
