/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const max = Math.max(...nums)
    const min = Math.max(...nums)
    let firstDrop = -1
    for (let i = nums.length-2; i >= 0; i--){
        if (nums[i] < nums[i+1]) {
            firstDrop = i
            break
        }
    }
    // Swap the first drop with the minimum value seen from end
    let buffer
    if (firstDrop >= 0) {
        let minI = null
        for (let i = firstDrop+1 ; i < nums.length; i++) {
            if (minI == null || nums[i] < nums[minI] && nums[i] > nums[firstDrop]) minI = i
        }
        buffer = nums[firstDrop]
        nums[firstDrop] = nums[minI]
        nums[minI] = buffer

    }
    
    // Sort the list to the right of the first drop
    for (let i = firstDrop+1; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]){
                buffer = nums[i]
                nums[i] = nums[j]
                nums[j] = buffer
            }
        }
    }
};
