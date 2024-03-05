module.exports = { 
 //param A : string
 //param B : string
 //return an integer
	strStr : function(A, B){
        if (A.length = 0 || B.length == 0) return -1
        for (let i = 0; i <= A.length - B.length; i++) {
            const substring = A.substring(i, i+B.length)
            if (B == substring) return i
        }
        return -1
	}
};
