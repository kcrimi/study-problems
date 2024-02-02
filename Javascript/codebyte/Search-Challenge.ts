input = "dee34lkasdndgxueeefasdnj"

function Solution(input: String): String {
	const result = findPattern(input)
  if (result) {
  	return "yes "+result
  } else {
	  return "no null"
  }
}

function findPattern(str:String) {
	let longestPattern = null
	for (let i = str.length / 2 + 1; i > 2; i--) {
  	let pattern = str.substring(0, i)
    if (str.substring(i).includes(pattern)) {
    	if (!longestPattern || pattern.length > longestPattern.length) {
      	longestPattern = pattern
      }
    }
  }
  if (str.length >= 5) {
  	let nextLongest = findPattern(str.substring(1))
    if (!longestPattern || (nextLongest && nextLongest.length > longestPattern.length)) {
      return nextLongest
    }
  }
  return longestPattern
}

console.log(Solution(input))
