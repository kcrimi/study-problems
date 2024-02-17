function solution(A: number[]): number {
    const primes = getFibs(A.length+1)
    const minPaths = new Array<number>(A.length)
    const stack = [-1]
    while (stack.length > 0) {
        let position = stack.shift()
        let jumps = position ==- 1 ? 0 : minPaths[position]
        let i = 0
        while (position + primes[i] <= A.length) {
            let newPosition = position + primes[i]
            if (newPosition == A.length) return jumps+1https://github.com/kcrimi/study-problems/tree/master/Java/src/Codility
            if (A[newPosition] == 1 && !minPaths[position + primes[i]]) {
                minPaths[position + primes[i]] = jumps + 1
                stack.push(position + primes[i])
            }
            i++
        }
    }
    return -1
}

//Whoops not primes....
function getPrimes(limit:number): number[] {
    const allNumbers = Array.from({length: limit}, (_, index) => index+1)
    const primes = new Set(allNumbers)
    for (let i = 2; i < limit+1; i++) {
        if (!primes.has(i)) continue
        for (let j = 2; j*i <= limit; j++) {
            primes.delete(i*j)
        }
    }
    return Array.from(primes)
}
function getFibs(limit: number): number[] {
    if (limit == 0) return []
    if (limit == 1) return [1]
    if (limit > 1) {
        const fibs = [1,2]
        while (fibs[fibs.length-1]+ fibs[fibs.length-2] <= limit){
            fibs.push(fibs[fibs.length-1]+ fibs[fibs.length-2])
        }
        return fibs
    }

}
