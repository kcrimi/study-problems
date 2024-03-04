module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	diffPossible : function(A, B){
        if (A.length == 1) return 0
        const nums = new Set()
        for (let i = 0; i < A.length; i++) {
            if (nums.has(A[i]-B)||nums.has(B+A[i])) {
                // console.log({val: A[i], diff: Math.abs(B-A[i]), nums})
                return 1
            }
            nums.add(A[i])
            // console.log(nums)
        }
        return 0
	}
};

