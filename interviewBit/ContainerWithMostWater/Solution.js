module.exports = { 
 //param A : array of integers
 //return an integer
	maxArea : function(A){
        let left = 0
        let right = A.length -1
        let maxArea = 0
        while (left < right) {
            const width = right - left
            const height = Math.min(A[left], A[right])
            const area = width * height
            if (area > maxArea) maxArea = area
            if (A[left] < A[right]) {
                left++
            } else {
                right--
            }
        }
        return maxArea
	}
};
