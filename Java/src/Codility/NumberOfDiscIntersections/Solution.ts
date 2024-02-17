// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    const startPoints = new Array(A.length).fill(0)
    const endPoints = new Array(A.length).fill(0)
    
    A.forEach((radius, center) => {
        startPoints[Math.max(0, center-radius)]++
        endPoints[Math.min(A.length-1, center+radius)]++
    })
    
    var activeCircles = 0
    var overlaps = 0
    for (let i = 0; i<A.length; i++) {
        if (startPoints[i]) {
            overlaps += activeCircles * startPoints[i]
            overlaps += startPoints[i] * (startPoints[i] -1) / 2
            if (overlaps> 10000000) return -1
            activeCircles += startPoints[i]
        }
        if (endPoints[i]) activeCircles -= endPoints[i]
    }
    return overlaps
}
