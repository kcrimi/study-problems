function solution(K: number, M: number, A: number[]): number {
    const split = Math.floor(A.length / 3)
    const left = A.slice(0, split)
    const middle = A.slice(split, split*2)
    const right = A.slice(split*2)
    var leftSum = left.reduce((prev, val) => prev+val, 0)
    var midSum = middle.reduce((prev, val) => prev+val, 0)
    var rightSum = right.reduce((prev, val) => prev+val, 0)
    var finished = 0

    // console.log({left, middle, right})
    // console.log({leftSum, midSum, rightSum})
    while (finished == 0) {
        const largeSum = Math.max(leftSum, midSum, rightSum)
        let newLeftSum = leftSum
        let newMidSum = midSum
        let newRightSum = rightSum
        if (leftSum == largeSum) {
            let moving = left.pop()
            middle.unshift(moving)
            newLeftSum -= moving
            newMidSum += moving
        } else if(rightSum == largeSum){
            let moving = right.shift()
            middle.push(moving)
            newRightSum -= moving
            newMidSum += moving
        }
        // console.log({left, middle, right})
        // console.log({leftSum, midSum, rightSum}, {newLeftSum, newMidSum, newRightSum}, largeSum)
        if (newMidSum > largeSum) {
            let newLargeSum = Math.max(newLeftSum, newMidSum, newRightSum)
            let toLeftLargeSum = Math.max(newLeftSum+middle[0], newMidSum - middle[0], rightSum)
            let toRightLargeSum = Math.max(newLeftSum, newMidSum-middle[middle.length-1],newRightSum+middle[middle.length-1])
            if (toLeftLargeSum < newLargeSum) {
                let moving = middle.shift()
                left.push(moving)
                newLeftSum += moving
                newMidSum -= moving
            } else if (toRightLargeSum < newLargeSum) {
                let moving = middle.pop()
                right.unshift(moving)
                newRightSum += moving
                newMidSum -= moving
            } else {
                break;
            }
        }
        leftSum = newLeftSum
        midSum = newMidSum
        rightSum = newRightSum
        const newLargeSum = Math.max(leftSum, midSum, rightSum)
        // console.log({leftSum, midSum, rightSum}, newLargeSum)
        if (newLargeSum == largeSum) finished = 1
    }
    return Math.max(leftSum, midSum, rightSum)
}
