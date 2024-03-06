module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	search : function(A, B){
		let found = -1
		let i = 0
		if (A[0] > B) {
			//Search from tail
			i = A.length -1
			let prev = Number.MAX_SAFE_INTEGER
			while (prev >= A[i]) {
				if (A[i] == B) return i
				prev = A[i]
				i--
			}
		} else {
			//Search from head
			let prev = Number.MIN_SAFE_INTEGER
			while (prev <= A[i]) {
				if (A[i] == B) return i
				prev = A[i]
				i++
			}
		}
		return -1
	}
};
