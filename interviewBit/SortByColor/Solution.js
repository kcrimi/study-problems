module.exports = { 
 //param A : array of integers
 //return a array of integers
	sortColors : function(A){
		const count = A.reduce((prev, val) => {
			prev[val] += 1
			return prev
		},[0,0,0])
		let output = []
		count.forEach((val, i) => {
			const array = new Array(val).fill(i)
			output = output.concat(array)
		})
		// console.log(output)
		return output
	}
};

// Intended 2 pointer implementation
module.exports = { 
 //param A : array of integers
 //return a array of integers
	sortColors : function(A){
		let head = 0
		let mid = 0
		let tail = A.length -1
		while (mid <= tail) {
			if (A[mid] == 1) {
				mid++
			} else if (A[mid] == 0) {
				A[mid] = A[head]
				A[head] = 0
				head++
				mid++
			} else if (A[mid] == 2) {
				A[mid] = A[tail]
				A[tail] = 2
				tail--
			}
			// console.log(A.slice(0,11))
		}
		return A
	}
};
