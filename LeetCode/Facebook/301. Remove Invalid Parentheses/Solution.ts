var maxLength = -1
var solutions = new Set<string>()
function checkDfs(string, index, result, lefts, rights ){
    // console.log({string,index, result, lefts, rights})
    if (index == string.length) {
        if (lefts == rights) {
            if (maxLength < result.length) {
                solutions = new Set<string>()
                solutions.add(result)
                maxLength = result.length
            } else if (maxLength == result.length){
                solutions.add(result)
            }   
        }
    } else {
        const char = string[index]
        switch (char) {
            case "(":
                checkDfs(string, index+1, result+char, lefts+1, rights)
                checkDfs(string, index+1, result, lefts, rights)
                break
            case ")":
                if (lefts > rights) {
                    checkDfs(string, index+1, result+char, lefts, rights+1)
                }
                checkDfs(string, index+1, result, lefts, rights)
                break
            default:
                checkDfs(string, index+1, result+char, lefts, rights)
        }
        if (string[index] == "(") {

        } else if (string[index] == ")") {

        } else (string[index])
    }
}

function removeInvalidParentheses(s: string): string[] {
    maxLength = -1
    solutions = new Set<string>()
    checkDfs(s, 0, "", 0,0)
    return Array.from(solutions)
};
