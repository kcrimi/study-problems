// one wrong, timeing out long

function solution(N: number, P: number[], Q: number[]): number[] {
    //Find available primes
    const possibleNums = Array.from(
        {length:N/2},
        (_, i) => i+1
    )
    const primes = new Set(possibleNums)
    primes.delete(1)
    for (let i = 2; i <= Math.sqrt(N); i++){
        if (primes.has(i)) {
            for (let j = 2; j <= N / i; j++){
                primes.delete(i*j)
            }
        }
    }
    const primesArray = new Array<number>(...primes)
    // console.log(primesArray)

    //Find semiprimes
    const semiPrimes = new Set<number>()
    primesArray.forEach((valA, i) => {
        for (let j = i; j < primesArray.length; j++){
            const semiPrime = valA * primesArray[j]
            if (semiPrime > N) break
            semiPrimes.add(valA * primesArray[j])
        }
    })
    const semiPrimesArray = new Array(...semiPrimes)
    // console.log(semiPrimesArray)

    //Run Queries
    return P.map((start, i)=>{
        const end = Q[i]
        return semiPrimesArray.reduce((prev, val) => {
            if (val >= start && val <= end) prev++
            return prev
        },0)
    })
}
