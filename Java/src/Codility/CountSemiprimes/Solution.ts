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

// failing one test
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
    for (let i = 0; i < primesArray.length; i++) {
        let valA = primesArray[i]
        for (let j = i; primesArray[j] * valA <= N; j++){
            semiPrimes.add(valA * primesArray[j])
        }
    }
    const semiPrimesArray = new Array(...semiPrimes).sort((a,b)=> a-b)
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
