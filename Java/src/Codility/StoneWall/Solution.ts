// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H: number[]): number {
    var bricks = 0
    const stack = []
    for (let i = 0; i < H.length; i++){
        if (stack.length != 0) {
            while (stack[stack.length-1] > H[i]){
                stack.pop()
            }
        }
        if (stack.length == 0 || stack[stack.length-1] < H[i]){
            bricks++
            stack.push(H[i])
        }
    }
    return bricks
}
