module.exports = { 
 //param A : string
 //return an integer
	solve : function(A){
		let start = null
		let head = 0
		let tail = A.length-1
		const chars = A.split("")
		while (head < tail) {
			// console.log({head, tail, start})
			if (chars[head] != chars[tail]) {
				start = null
				head++
				tail = A.length-1
			} else {
				if (start == null) start = head
				head++
				tail--
			}
			// console.log(start)
		}
		return start != null ? start : A.length - 1
	}
};
