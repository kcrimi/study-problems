// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[], K: number): number[] {
    const rotations = K % A.length
    if (rotations == 0) return A
    const arrayA = A.slice(A.length - rotations)
    const arrayB = A.slice(0, A.length - rotations)
    return arrayA.concat(arrayB)
}
