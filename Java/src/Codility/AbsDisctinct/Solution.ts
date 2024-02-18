function solution(A: number[]): number {
    // Implement your solution here
    const absA = A.map((val) => Math.abs(val))
    const set = new Set(absA)
    return set.size
}

//Caterpillar as intended?
function solution(A: number[]): number {
    var left = 0
    var right = A.length -1
    var current = Math.max(Math.abs(A[left]), Math.abs(A[right]))
    var distinct = 1
    while (left < right) {
        if (Math.abs(A[left]) == current) {
            left++
        } 
        if(Math.abs(A[right]) == current) {
            right--
        } 
        if(Math.abs(A[left]) != current && Math.abs(A[right]) != current) {
            current = Math.max(Math.abs(A[left]), Math.abs(A[right]))
            distinct++
        }
    }
    return distinct
}
