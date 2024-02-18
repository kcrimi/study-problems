/*failed small
random + 200 * [MIN_INT] + random ,length = ~300✘WRONG ANSWER
got 149 expected 99 
*/

function solution(A: number[]): number {
    // Implement your solution here
    const leadersLeft = new Array(A.length-1)
    const leadersRight = new Array(A.length-1)
    var leaderLeft = undefined
    const countLeft = new Map()
    var leaderRight = undefined
    const countRight = new Map()
    for (let i = 0; i < A.length-1; i++){
        const valLeft = A[i]
        const items = 1 + i
        var newCountLeft = (countLeft.get(valLeft) ?? 0) + 1
        if (leaderLeft == undefined || newCountLeft > items / 2) {
            leaderLeft = valLeft
        } else if (countLeft.get(leaderLeft) <= items / 2) {
            leaderLeft = undefined
        }
        countLeft.set(valLeft, newCountLeft)

        const tail = A.length-1-i
        const valRight = A[tail]
        var newCountRight = (countRight.get(valRight) ?? 0) + 1
        if (leaderRight == undefined || newCountRight > items / 2) {
            leaderRight = A[tail]
        } else if (countRight.get(leaderRight) <= items / 2) {
            leaderRight = undefined
        }
        countRight.set(valRight, newCountRight)

        leadersLeft[i] = leaderLeft
        leadersRight[tail-1] = leaderRight
    }
    return leadersLeft.reduce((prev, leftVal,i)=>{
        if (leftVal != undefined && leftVal == leadersRight[i]){
            return prev + 1 
        } else {
            return prev
        }
    }, 0)
}

//Faster, no need for caterpillar
function solution(A: number[]): number {
    const counter = new Map<number, number>()
    const leader = new Array(A.length-1)
    const leaderCounts = new Array(A.length-1)
    A.forEach((val, i) => {
        const prevCount = counter.get(val) ?? 0
        if (prevCount + 1 > (1 + i) / 2) {
            leader[i] = val
            leaderCounts[i] = prevCount + 1
        } else if (leaderCounts[i-1] <= (1 + i) / 2) {
            leader[i] = undefined
            leaderCounts[i] = 0
        } else {
            leader[i] = leader[i-1]
            leaderCounts[i] = leaderCounts[i-1]
        }
        counter.set(val, prevCount+1)
    })
    return leader.reduce((prev, val, i) => {
        if (val != undefined) {
            if (counter.get(val) - leaderCounts[i] > (A.length-1-i)/ 2){
                return prev + 1
            }
        }
        return prev
    }, 0)
}

