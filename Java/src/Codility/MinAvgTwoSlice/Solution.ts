//Timeout O(n^2)
function solution(A: number[]): number {
    const sums = new Array(A.length)
    sums[0] = A[0]
    for (var i = 1; i < A.length; i++) {
        sums[i] = sums[i-1] + A[i]
    }
    var minAvg = sums[A.length-1] / A.length
    var minStart = 0
    for (var i = 0; i < A.length - 1; i++){
        for (var j = A.length-1; j > i; j--) {
            let lower = i == 0 ? 0 : sums[i-1]
            let avg = (sums[j] - lower) / (j - i + 1)
            if (avg < minAvg){
                minAvg = avg
                minStart = i
            }
        }
    }
    return minStart
}
// Still timing out on the biggest case
function solution(A: number[]): number {
    // Implement your solution here
    var minAvg = Number.MAX_SAFE_INTEGER
    var minStart = 0
    for (let i = 0; i < A.length-1; i++) {
        if (A[i] > minAvg) continue;
        var sum = A[i]
        var avg = sum
        for (let j = i+1; j < A.length; j++) {
            if (j-i > 1 && A[j] > avg) break;
            sum += A[j]
            avg = sum / (j-i+1)
            if (avg < minAvg) {
                minAvg = avg
                minStart = i
            }
        }
    }
    return minStart
}
