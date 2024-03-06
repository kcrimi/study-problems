module.exports = { 
 //param A : string
 //return a array of strings
	prettyJSON : function(A){
		const output = []a
		let pretty = ""
		let indents = 0
		A.split("").forEach((char) => {
			if (char == ',') {
				output.push(pretty+char)
				pretty = ""
			} else if (char == '[' | char == '{') {
				if (pretty.length > 0) output.push(pretty)
				output.push('\t'.repeat(indents) + char)
				indents++
				pretty = ""
			} else if (char == ']' || char == '}') {
				indents--
				if (pretty.length > 0) output.push(pretty)
				pretty = '\t'.repeat(indents) + char
			} else {
				if (pretty.length == 0 && indents > 0){
					pretty = '\t'.repeat(indents)
				}
				pretty = pretty+char
			}
			// console.log(output)
		})
		if (pretty.length > 0) output.push(pretty)
		return output
	}
}
