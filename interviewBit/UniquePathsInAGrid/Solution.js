function countPaths(m,n,arr) {
	if (arr[m][n] == 1) return 0
	if (m == 0 && n ==0) return 1
	
	let paths = 0
	if (m != 0) {
		paths += countPaths(m-1, n, arr)
	}
	if (n != 0) {
		paths += countPaths(m, n-1, arr)
	}
	return paths
}

module.exports = { 
 //param A : array of array of integers
 //return an integer
	uniquePathsWithObstacles : function(A){
		return countPaths(A.length-1, A[0].length-1, A)
	}
};
