let arr = [3, 4, 2, 1]

const challenge = (arr: Array<number>): Array<number> => {
	const sum = arr.reduce((acc, x) => acc + x)
	if (sum % 2 == 1) return [-1]
	const target = sum / 2
  const arrA = solve(arr.sort(), 0, arr.length / 2, target)
  if (arrA[0] == -1) return arrA
  const arrB = arr.filter(x => !arrA.includes(x))
  return arrA.sort().concat(arrB
}


const solve = (arr: Array<number>, start: number, targetLength:number, target: number): Array => {
	console.log({start, targetLength, target})
	if (targetLength == 1) {
  	for (let i = start; i < arr.length; i++) {
    	if (arr[i] == target) return [arr[i]]
    }
  } else {
    for (let i = start; i <= arr.length - targetLength; i++) {
      let chosen = arr[i]
      if (chosen < target) {
        let result = solve(arr, i++, targetLength - 1, target - chosen)
        console.log(result)
        if (result[0] != -1) return [chosen].concat(result)
      }
    }
  }
  return [-1]
}

console.log(challenge(arr))
