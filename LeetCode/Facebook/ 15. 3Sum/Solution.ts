function threeSum(nums: number[]): number[][] {
    const output = new Array<number[]>()
    nums.sort((a,b)=> a-b)
    for (let head = 0; head < nums.length; head++) {
        if (head > 0 && nums[head] == nums[head-1]) continue
        let middle = head + 1
        let tail = nums.length-1
        while (tail > middle) {
            const sum = nums[head] + nums[middle] + nums[tail]
            if (sum ==0) {
                output.push([nums[head], nums[middle], nums[tail]])
                while (tail > middle && nums[middle] == nums[middle+1]) middle++
                while (tail > middle && nums[tail] == nums[tail-1]) tail--
                middle++
                tail--
            } else if (sum < 0) {
                middle++
            } else if (sum > 0) {
                tail--
            }
        }
    }
    
    return output
};
