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
