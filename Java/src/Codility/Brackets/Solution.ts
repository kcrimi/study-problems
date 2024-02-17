// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S: string): number {
    const stack = []
    for (let i = 0; i < S.length; i++) {
        const s = S[i]
        if (['(', '{', '['].includes(s)){
            stack.push(s)
        } else {
            if ((s == ')' && stack[stack.length-1]=='(')
                || (s == '}' && stack[stack.length-1]=='{')
                || (s == ']' && stack[stack.length-1]=='[')
            ){
                stack.pop()
            } else {
                return 0
            }
        }
    }
    return stack.length == 0 ? 1 : 0
}
