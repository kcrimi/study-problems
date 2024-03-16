module.exports = { 
	//param A : array of integers
	//return nothing
	arrange : function(A){
		for (let i = 0; i < A.length; i++) {
			
			let newVal = 0
			if (A[A[i]] > A.length) {
				newVal = ((A[A[i]] - (A[A[i]] % A.length)) / A.length)-1
			} else {
				newVal = A[A[i]]
			} 
			A[i] = (A[i]+1)*A.length + newVal
		}
		for (let i = 0; i < A.length; i++) {
			A[i] = A[i] % A.length
		}
	}
	// 23 4 2 1 3

};
