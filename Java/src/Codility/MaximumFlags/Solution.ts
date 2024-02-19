// timed out some
function solution(A: number[]): number {
    // find peaks
    const peaks = new Array<number>()
    var prev = A[0]
    for (let i = 1; i < A.length-1; i++) {
        const current = A[i]
        if (current > prev && A[i+1] < current){
            peaks.push(i)
        }
        prev = current
    }
    
    var flagsPlanted = 0
    for (let flags = peaks.length; flags > 0; flags--) {
        var flagsPlanted = 1
        var lastFlagPlanted = peaks[0]
        for (let i = 1; i < peaks.length; i++) {
            if (peaks[i] - lastFlagPlanted >= flags) {
                flagsPlanted++
                lastFlagPlanted = peaks[i]
            }
        }
        if (flagsPlanted == flags) break;
    }
    return flagsPlanted

}

function solution(A: number[]): number {
    // find peaks
    const peaks = new Array<number>()
    var prev = A[0]
    for (let i = 1; i < A.length-1; i++) {
        const current = A[i]
        if (current > prev && A[i+1] < current){
            peaks.push(i)
        }
        prev = current
    }
    if (peaks.length <=2) return peaks.length
    
    const upperLimitFlags = Math.min(
        peaks.length, 
        Math.ceil(Math.sqrt(peaks[peaks.length-1] - peaks[0]))
    )
    var flagsPlanted = 0
    for (let flags = upperLimitFlags; flags > 0; flags--) {
        var flagsPlanted = 1
        var lastFlagPlanted = peaks[0]
        for (let i = 1; i < peaks.length; i++) {
            if (peaks[i] - lastFlagPlanted >= flags) {
                flagsPlanted++
                lastFlagPlanted = peaks[i]
            }
        }
        if (flagsPlanted >= flags) return flags;
    }
    return flagsPlanted
}
