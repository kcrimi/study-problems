// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/
/ Fails with ~10000
function solution(A: number[]): number {
    // Implement your solution here
    A.sort()
    for (let i = 0; i < A.length; i++){
        if (A[i] != i + 1) {
            return i+1
        }
    }
};

// Correct
function solution(A: number[]): number {
    // Implement your solution here 
    const s = new Set()
    for (let i = 1; i <= A.length+1; i++) {
        s.add(i)
    }
    A.forEach((x)=>{
        s.delete(x)
    })
    return s.values().next().value
}
