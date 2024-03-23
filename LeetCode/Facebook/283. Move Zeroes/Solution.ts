/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let head = 0 
    let tail = 1
    while (tail < nums.length) {
        if (nums[tail] == 0 || tail <= head) {
            tail++
        } else if (nums[head] == 0){
            nums[head] = nums[tail]
            nums[tail] = 0
            head++
            tail++
        } else {
            head++
        }
    }
};
