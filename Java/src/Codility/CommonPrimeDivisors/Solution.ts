// timeouts in large sets

function solution(A: number[], B: number[]): number {
    // Find possible primes
    //// find largest number
    const largestB = Math.max(...B)
    const largestPossibleDivisor = Math.max(Math.floor(largestB / 2),2)
    //// find primes <= largest / 2
    const possiblePrimes = new Set(Array.from({length:largestB}, (_,i)=> i+1))
    possiblePrimes.delete(1)
    // console.log ({largestB, largestPossibleDivisor})
    for (let i =2; i < largestB; i++) {
        let multiplier = 2
        while (multiplier * i <= largestB) {
            possiblePrimes.delete(i * multiplier)
            multiplier++
        }
    }
    const primes = Array.from(possiblePrimes)
    // console.log(possiblePrimes)

    // check if same
    let output = 0
    for (let i = 0; i < A.length; i++) {
        const primeDivisorsA = []
        const a = A[i]
        const b = B[i]
        // console.log({output, a, b})
        if (a == b) {
            output++
            continue
        } else if (possiblePrimes.has(a) && possiblePrimes.has(b)) {
            continue
        }
        let hasSameDivisors = 1
        for (let primeI = 0; primeI < primes.length; primeI++) {
            const prime = primes[primeI]
            // console.log({prime})
            if ((a % prime == 0) != (b % prime == 0)){
                hasSameDivisors = 0
                break
            }
        }
        output += hasSameDivisors
    }

    return output
}
