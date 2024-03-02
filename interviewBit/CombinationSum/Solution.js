var depth = 0

function findPermutations(A,B) {
	depth++
	let permutations = []
	// console.log({depth, B})
	for (let i = 0; i < A.length; i ++) {
		if (A[i] > B) break
		// console.log({depth, B, val, newSum})
		if (A[i] == B) {
			permutations.push([A[i]])
			break
		}
		const newPerms = findPermutations(A.slice(i), B - A[i])
		newPerms.forEach((perm) => perm.unshift(A[i]))
		// console.log({permutations, newPerms})
		permutations = permutations.concat(newPerms)
	}
	// console.log(permutations)
	depth--
	return permutations
}

module.exports = { 
 //param A : array of integers
 //param B : integer
 //return a array of array of integers
	combinationSum : function(A, B){
		const valid = A.filter((x)=> x<= B).sort((a,b)=> a-b)
		const distinct = Array.from(new Set(valid))
		const perms = findPermutations(distinct, B)
		// console.log(perms)
		return perms
	}
};
