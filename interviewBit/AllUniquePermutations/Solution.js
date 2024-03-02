var depth =0
function findPermutations(available) {
    depth++
    keys = Array.from(available.keys())
    // console.log({keys})
    if (keys.length == 1 && available.get(keys[0])==1) {
        depth--
        return [keys]  
    } 
    let output = []
    keys.forEach((val) => {
        // console.log({depth,val})
        const newMap = new Map(available)
        const prevCount = newMap.get(val)
        if (prevCount > 1) {
            newMap.set(val, prevCount-1)
        } else {
            newMap.delete(val)
        }
        const permutations = findPermutations(newMap)
        // console.log({val, permutations})
        permutations.forEach((perm) => {
            perm.unshift(val)
        })
        
        output = output.concat(permutations)
        // console.log(output)
    })
    depth--
    return output
}

module.exports = { 
 //param A : array of integers
 //return a array of array of integers
	permute : function(A){
        const count = new Map()
        for (let i = 0; i < A.length; i++){
            const val = A[i]
            const prevVal = count.has(val) ? count.get(val) : 0
            count.set(val, prevVal+1)
        }
        // console.log (count)
        const output = findPermutations(count)
        // console.log(output)
        return output
	}
};
