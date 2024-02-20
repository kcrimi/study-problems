// Timing out in large
function solution(M: number, A: number[]): number {
    // Implement your solution here
    const numsInSlice = new Set()
    let distinctSlices = 0
    for (let i = 0; i < A.length ; i++) {
        for (let j = i; j < A.length; j++) {
            if (numsInSlice.has(A[j])) break
            numsInSlice.add(A[j])
            distinctSlices++
        }
        numsInSlice.clear()
    }
    return distinctSlices
}

/* 
Error on a large range, probably number overflow or something */

function solution(M: number, A: number[]): number {
    if (M == 0) return A.length
    const prevSeen = new Map<number,number>()
    let count = 0
    let prevCount = 0
    for (let i = 0; i < A.length ; i++) {
        const distanceToLast = i - (prevSeen.get(A[i]) ?? - 1)
        const slicesEndingHere = Math.min(distanceToLast, prevCount+1)
        count += slicesEndingHere
        prevCount = slicesEndingHere
        prevSeen.set(A[i], i)
    }
    return count
}
