function canCreatePalindrome(s: string, head, tail, deletions: number): boolean {
    if (tail-head <= 0) {
        return true
    }
    if (s[head] == s[tail]) {
        return canCreatePalindrome(s, head + 1, tail -1, deletions)
    }
    if (deletions > 0) {
        deletions--
        return canCreatePalindrome(s, head+1, tail, deletions)
            || canCreatePalindrome(s, head, tail-1, deletions)
    }
    return false
}

function validPalindrome(s: string): boolean {
    return canCreatePalindrome(s, 0, s.length-1, 1)
};
