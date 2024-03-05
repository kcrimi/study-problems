const map = new Map([
	['M', 1000],
	['D', 500],
	['C', 100],
	['L', 50],
	['X', 10],
	['V', 5],
	['I',1]
])

module.exports = { 
 //param A : string
 //return an integer
	romanToInt : function(A){
		let sum = 0
		const roman = A.split('')
		for (let i =0; i < roman.length; i++) {
			const current = map.get(roman[i])
			if (i != roman.length-1 && current < map.get(roman[i+1])){
				sum -= current
			} else {
				sum += current
			}
			// console.log(sum)
		}
		return sum
	}
};
