function minRemoveToMakeValid(s: string): string {
    let leftCount = 0
    let leftString = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") leftCount++
        if (s[i] == ")") {
            if (leftCount > 0) {
                leftCount--
            } else {
                continue
            }
        }
        leftString = leftString + s[i]
    }
    if (leftCount == 0) return leftString
    let rightString = ""
    let rightCount = 0
    // too many left (
    for (let i = leftString.length -1; i >= 0; i--) {
        if (leftString[i] == ")") rightCount++
        if (leftString[i] == "(") {
            if (rightCount > 0) {
                rightCount--
            } else {
                continue
            }
        }
        rightString = leftString[i] + rightString
    }
    return rightString
};
