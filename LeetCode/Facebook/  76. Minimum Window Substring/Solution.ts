function minWindow(s: string, t: string): string {
    // Scan each string for char counts
    const needleCount = new Map<string,number>()
    for (let i = 0; i < t.length; i++) {
        const value = t[i]
        if (needleCount.has(value)) {
            needleCount.set(value, needleCount.get(value)+1)
        } else {
            needleCount.set(value, 1)
        }
    }
    let start = 0
    let end = -1
    let needed = new Map(needleCount)
    let shortest = null
    while (end < s.length) {
        //console.log({start, end, needed})
        if (start > end) {
            end++
            if(needed.has(s[end])) needed.set(s[end], needed.get(s[end]) - 1)
            continue
        } else if (!needed.has(s[start])) {
            start++
            if (start > end) {
                end++
                if(needed.has(s[end])) needed.set(s[end], needed.get(s[end]) - 1)
            }
        } else if (needed.get(s[start]) < 0) {
            needed.set(s[start],needed.get(s[start])+1)
            start ++
            if (start > end) {
                end++
                if(needed.has(s[end])) needed.set(s[end], needed.get(s[end]) - 1)
            }
        } else if (!needed.has(s[end])) {
            end++
            if(needed.has(s[end])) needed.set(s[end], needed.get(s[end]) - 1)
        } else if(needed.has(s[end])) {
            // Check if no more needed letters
            let valid = true
            for (let key of needed.keys()){
                if (needed.get(key) > 0) {
                    valid = false
                    break
                }
            }
            if (valid) {
                const substring = s.slice(start, end+1)
                if (shortest == null || substring.length < shortest.length){
                    shortest = substring
                }
                needed.set(s[start], needed.get(s[start])+1)
                start++
            } else {
                end++
                if(needed.has(s[end])) needed.set(s[end], needed.get(s[end]) - 1)
            }
        } else{ 
            end++
            if(needed.has(s[end])) needed.set(s[end], needed.get(s[end]) - 1)
        }
    }
    return shortest ?? ""
};
