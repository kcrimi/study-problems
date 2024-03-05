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
