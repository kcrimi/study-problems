function isAlienSorted(words: string[], order: string): boolean {
    for (let i = 0; i < words.length-1; i++) {
        let char = 0
        let valid = true
        while (char <= words[i].length && char <= words[i+1].length){
            if (char == words[i].length && char == words[i+1].length) break
            const orderA = order.indexOf(words[i][char])
            const orderB = order.indexOf(words[i+1][char])
            if (orderA > orderB || char == words[i+1].length) return false
            if (orderA < orderB) break
            char++
        }
    }
    return true
};
