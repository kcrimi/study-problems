const numMap = new Map([
    ['1', "1"],
    ['2', "abc"],
    ['3', "def"],
    ['4', "ghi"],
    ['5', "jkl"],
    ['6', "mno"],
    ['7', "pqrs"],
    ['8', "tuv"],
    ['9', "wxyz"],
    ['0', "0"],
])

function findPermutations(numbers) {
    // console.log(numbers)
    const options = numMap.get(numbers.split("")[0]).split("")
    // console.log({numbers, options})
    let output = []
    options.forEach((letter) => {
        if (numbers.length > 1) {
            const newPerms = findPermutations(numbers.substring(1))
                .map((perm) => letter+perm)
            output = output.concat(newPerms)      
        } else {
            output = output.concat([letter])
        }
        // console.log({letter, output})
    })
    return output
}

module.exports = { 
 //param A : string
 //return a array of strings
	letterCombinations : function(A){
        const output = findPermutations(A)
        // console.log(output)
        return output
	}
};
