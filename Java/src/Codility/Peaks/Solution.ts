//Some wrong answers
function solution(A: number[]): number {
    const peaks = []
    for (let i = 1; i < A.length-1; i++) {
        if (A[i] > A[i-1] && A[i] > A[i+1]){
            peaks.push(i)
        }
    }
    if (peaks.length == 0) return 0

    const elementGroupings = new Set()
    const peakGroupings = new Set()
    for (let i = 1; i <= Math.sqrt(A.length); i++) {
        if (A.length % i ==0) elementGroupings.add(i)
    }
    for (let i = 1; i <= peaks.length; i++) {
        if (peaks.length % i == 0) peakGroupings.add(i)
    }
    const upperBound = Math.min(
        Math.ceil(Math.sqrt(A.length)),
        peaks.length
    )
    for (let blocks = upperBound; blocks >= 1; blocks--) {
        //Make sure elements and peaks can be split into equal groups
        if (!elementGroupings.has(blocks) || !peakGroupings.has(blocks)) continue;
        let currentBlock = 1
        let currentPeakCount = 0
        const blockSize = A.length / blocks
        const peaksPerBlock = peaks.length / blocks
        for (let i = 0; i < peaks.length; i++){
            if (currentPeakCount == peaksPerBlock) {
                currentPeakCount = 0
                currentBlock++
            }
            let lowerLimit = blockSize * (currentBlock - 1)
            let upperLimit = blockSize * currentBlock
            if (peaks[i] >= lowerLimit && peaks[i] < upperLimit) {
                currentPeakCount++
            } else {
                break
            }
        }
        if (currentBlock == blocks && currentPeakCount == peaksPerBlock) {
            return blocks
        }
    }
    return 0
}
