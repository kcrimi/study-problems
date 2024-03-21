function numDecodings(s: string): number {
    let decodings = new Array(s.length).fill(0)
    if (s[0] == "0") return 0
    if (s.length == 1) return 1
    decodings[0] = 1
    for (let i = 1; i < s.length; i++) {
        if (s[i] != "0"){
            decodings[i] =+ decodings[i-1]
        }
        if (i >= 1 && s[i-1] != "0" && parseInt(s.slice(i-1, i+1)) <= 26) { 
            decodings[i] += i >=2 ? decodings[i-2] : 1
        }
    }
    return decodings[s.length-1]
};
