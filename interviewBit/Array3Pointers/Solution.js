module.exports = { 
 //param A : array of integers
 //param B : array of integers
 //param C : array of integers
 //return an integer
	minimize : function(A, B, C){
        let i = 0
        let j = 0
        let k = 0
        let minMaxDiff = Number.MAX_SAFE_INTEGER
        while (i < A.length && j < B.length && k < C.length) {
            const max = Math.max(A[i],B[j],C[k])
            const min = Math.min(A[i],B[j],C[k])
            minMaxDiff = Math.min(minMaxDiff, max-min)
            if (A[i] == min) i++
            else if (B[j] == min) j++
            else k++
        }
        return minMaxDiff
	}
};

