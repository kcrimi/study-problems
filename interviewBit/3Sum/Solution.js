module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	threeSumClosest : function(A, B){
		let closestSum = null
		A.sort((a,b)=> a-b)
		for (let i = 0; i < A.length; i++) {
			const head = A[i]
			let j = i+1
			let k = A.length-1
			while (j < k){
				const sum = head + A[j] + A[k]
				if (sum == B) return sum
				if (closestSum == null || Math.abs(B-sum) < Math.abs(B-closestSum)) {
					closestSum = sum
				}
				if (sum > B) {
					k--
				} else if (sum < B) {
					j++
				}
			}
		}
		return closestSum
	}
};
