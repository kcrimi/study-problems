function isPalindrome(s: string): boolean {
    const chars = s.split("")
        .map((char)=> char.toLowerCase())
        .filter((char) => char.match('[a-z0-9]'))
    console.log(chars)
    let head = 0
    let tail = chars.length - 1
    while (head < tail) {
        if (chars[head] == chars[tail]) {
            head++
            tail--
        } else {
            return false
        }
    }
    return true
};
