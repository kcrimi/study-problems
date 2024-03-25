// O(nm) too slow
function findAnagrams(s: string, p: string): number[] {
    const pCount = new Map<string, number>()
    for (let letter of p) {
        if (!pCount.has(letter)) {
            pCount.set(letter, 1)
        } else {
            pCount.set(letter, pCount.get(letter)+1)
        }
    }
    const output = []
    for (let i = 0; i <= s.length-p.length; i++) {
        const counts = new Map(pCount)
        for (let j = i; j < i + p.length; j++){
            if (!counts.has(s[j]) || counts.get(s[j]) < 0) break
            counts.set(s[j], counts.get(s[j])-1)
        }
        let anagram = true
        for (let [key, count] of counts) {
            if (count> 0) {
                anagram = false 
                break
            }
        }
        if (anagram) output.push(i)
    }
    return output
};

// O(n) with sliding window
function findAnagrams(s: string, p: string): number[] {
    const pCount = new Map<string, number>()
    for (let letter of p) {
        if (!pCount.has(letter)) {
            pCount.set(letter, 1)
        } else {
            pCount.set(letter, pCount.get(letter)+1)
        }
    }

    let head = 0
    let tail = -1
    let lettersNeeded = p.length
    let output = []
    while (tail < s.length-1) {
        // console.log({head, tail, lettersNeeded, pCount})
        if (tail - head < p.length -1) {
            tail++
            if (pCount.has(s[tail])) {
                const prevCount = pCount.get(s[tail])
                if (prevCount > 0) lettersNeeded--
                pCount.set(s[tail], prevCount-1)
            }
        }
        if (tail - head == p.length -1) {
            if (lettersNeeded == 0) output.push(head)
            if (pCount.has(s[head])) {
                const prevCount = pCount.get(s[head])
                if (prevCount >= 0) lettersNeeded++
                pCount.set(s[head], prevCount+1)
            }
            head++
        }
    }
    return output
};
