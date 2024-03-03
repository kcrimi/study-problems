module.exports = { 
 //param A : string
 //param B : array of strings
 //return a array of integers
	findSubstring : function(A, B){
        const wordLength = B[0].length
        const words = B.length
        const requiredSize = words * wordLength
        const wordMap = new Map()
        B.forEach((word) => {
            if (!wordMap.has(word)) {
                wordMap.set(word, 1)
            } else {
                wordMap.set(word, wordMap.get(word)+1)
            }
        })
        
        const output = []
        // console.log({wordLength, words, requiredSize})
        for (let i = 0; i <= A.length - (requiredSize); i++) {
            let valid = true
            const wordCounts = new Map(wordMap)
            for (let wordCount = 0; wordCount < words; wordCount++){
                const wordStart = i + (wordCount * wordLength) 
                const wordEnd = i + ((wordCount+1) * wordLength)
                const substring = A.substring(wordStart, wordEnd)
                // console.log({A, wordStart, wordEnd, substring})
                const available = wordCounts.get(substring)
                if (!available || available < 1) {
                    valid = false
                    break
                }
                wordCounts.set(substring, available-1)
            }
            if (valid) output.push(i)
        }
        return output
	}
};
