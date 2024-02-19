function solution(N: number, P: number[], Q: number[]): number[] {
    //Find available primes
    const possibleNums = Array.from(
        {length:N/2},
        (_, i) => i+1
    )
    const primes = new Set(possibleNums)
    // console.log(primes)
    primes.delete(1)
    for (let i = 2; i < Math.sqrt(N); i++){
        if (primes.has(i)) {
            for (let j = 2; j <= N / i; j++){
                primes.delete(i*j)
            }
        }
    }
    // console.log(primes)
    const primesArray = Array.from(primes)
    // console.log(primesArray)

    //Find semiprimes
    const semiPrimes = new Set<number>()
    for (let i = 0; i < primesArray.length; i++) {
        let valA = primesArray[i]
        for (let j = i; primesArray[j] * valA <= N; j++){
            semiPrimes.add(valA * primesArray[j])
        }
    }
    const semiPrimesArray =  Array.from(semiPrimes).sort((a,b)=> a-b)
    // console.log(semiPrimesArray)
    
    //Run Queries
    const output = []
    for (let k = 0; k < P.length; k++) {
        let count = 0
        for (let i = 0; i < semiPrimesArray.length; i++) {
            let semiPrime = semiPrimesArray[i]
            if (semiPrime > Q[k]) break
            if (semiPrime >= P[k]) count++
        }
        output.push(count)
    }
    return output
}
