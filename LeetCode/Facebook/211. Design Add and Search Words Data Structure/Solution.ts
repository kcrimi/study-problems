class WordDictionary {
    trie
    constructor() {
        this.trie = new Map()
    }

    addWord(word: string): void {
        let level = this.trie
        for (let i = 0; i < word.length; i++) {
            if (!level.has(word[i])) {
                level.set(word[i],new Map())
            }
            level = level.get(word[i])
        }
        level.set("END", null)
        // console.log(this.trie)
    }

    private searchTrie(word, trie): boolean {
        // console.log({word, trie})
        if (word.length == 0) return trie.has("END")
        if (word[0] == "." && trie.size > 0) {
            for (let [key, subTrie] of trie) {
                if (subTrie && this.searchTrie(word.slice(1), subTrie)) {
                    return true
                }
            }
        } else if (trie.has(word[0])) {
            return this.searchTrie(word.slice(1), trie.get(word[0]))
        }
        return false
    }

    search(word: string): boolean {
        return this.searchTrie(word, this.trie)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
