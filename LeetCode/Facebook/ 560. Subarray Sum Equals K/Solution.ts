function subarraySum(nums: number[], k: number): number {
    let output = 0
    const sumCounts = new Map<number, number>()
    let sum = 0
    for (let value of nums) {
        if (!sumCounts.has(sum)) {
            sumCounts.set(sum, 1)
        } else {
            sumCounts.set(sum,sumCounts.get(sum)+1)
        }
        sum += value
        if (sumCounts.has(sum-k)) output += sumCounts.get(sum-k)
    }
    return output
};
