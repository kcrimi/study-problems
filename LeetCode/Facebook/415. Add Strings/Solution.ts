function addStrings(num1: string, num2: string): string {
    let place = 1
    let carryover = 0
    let output = ""
    while (place <= num1.length || place <= num2.length || carryover > 0) {
        const digit1 = place <= num1.length ? num1[num1.length-place] : "0"
        const digit2 = place <= num2.length ? num2[num2.length-place] : "0"
        const sum = parseInt(digit1) + parseInt(digit2) + carryover
        output = (sum%10) + output
        carryover = (sum - (sum % 10)) / 10
        place++
    }
    return output
};
