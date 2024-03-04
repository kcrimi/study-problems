module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	diffPossible : function(A, B){
        if (A.length == 1)  return 0
        let head = 0
        let tail = 1
        while (head < tail && tail < A.length) {
            if (A[tail] - A[head] == B) {
                return 1
            } else if (A[tail] - A[head] > B) {
                head++
                if (tail == head) tail++
            } else {
                tail++
            }
        }
        return 0
	}
};
