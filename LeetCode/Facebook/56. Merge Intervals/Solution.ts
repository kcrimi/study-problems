function merge(intervals: number[][]): number[][] {
    let start = null
    let end = null
    const output = []
    intervals.sort((a,b) => a[0]-b[0])
    for (let [intStart, intEnd] of intervals) {
        if (start == null) {
            start = intStart
            end = intEnd
        } else if (intStart > end) {
            output.push([start,end])
            start = intStart
            end = intEnd
        } else {
            end = Math.max(end, intEnd)
        }
    }
    output.push([start, end])
    return output
};
