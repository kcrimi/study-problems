var depth = 0
function findPermutations(open, spaces) {
    depth++
    let output = []
    if (open == spaces) {
        let closeAll = ""
        while (closeAll.length < open) {
            closeAll += ")"
        }
        output.push(closeAll)
    } else {
        let openPerms = findPermutations(open+1, spaces-1)
            .map((perm) => "(" + perm)
        output = output.concat(openPerms)
        if (open > 0) {
            let closePerms = findPermutations(open - 1, spaces - 1)
                .map((perm) => ")"+perm)
            output = output.concat(closePerms)
        }
    }
    // console.log({depth, output})
    depth--
    return output
}

module.exports = { 
 //param A : integer
 //return a array of strings
	generateParenthesis : function(A){
        return findPermutations(0, A*2)
	}
};
