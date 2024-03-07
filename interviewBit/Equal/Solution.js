module.exports = { 
 //param A : array of integers
 //return a array of integers
	equal : function(A){
        matches = []
        sumMap = new Map()
        for (let i = 0; i < A.length; i++) {
            for (let j = i+1; j < A.length; j++) {
                const sum =  A[i] + A[j]
                if (sumMap.has(sum)) {
                    const indices = sumMap.get(sum)
                    if (!indices.includes(i) && !indices.includes(j)) {
                        matches.push(indices.concat([i,j]))
                    }
                } else {
                    sumMap.set(sum, [i,j])
                }
            }
        }
        if (matches.length > 0) {
            matches.sort((a,b) => {
                return (a[0]-b[0])*1000000000 +
                    (a[1]-b[1])*1000000 +
                    (a[2]-b[2])*10000 +
                    a[3]-b[3]
            })
            // console.log(matches)
            return matches[0]
        }
        return []
	}
};
