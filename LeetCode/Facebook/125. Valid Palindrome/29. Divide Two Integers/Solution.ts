// Works but times out on tests
function divide(dividend: number, divisor: number): number {
    if (dividend == Math.pow(2, 31) && divisor == -1) return 0 - dividend -1
    let quotient = 0
    let negative = false
    if (dividend < 0) {
        negative = true
        dividend = 0 - dividend
    } 
    if (divisor < 0) {
        negative = !negative
        divisor = 0 - divisor
    }
    console.log(dividend, divisor)
    while (dividend >= divisor && quotient < Math.pow(2,31)-1) {
        dividend -= divisor
        quotient++
    }
    console.log({quotient, dividend, divisor})
    if (negative) {
        quotient = 0 - quotient
    }
    return quotient
};

// Bit shifting
function divide(dividend: number, divisor: number): number {
    if (dividend == -Math.pow(2, 31) && divisor == -1) return 0-(dividend + 1)

    let negative = false
    if (dividend < 0) {
        negative = true
        dividend = 0-dividend
    }
    if (divisor < 0) {
        negative = !negative
        divisor = 0-divisor
    }
    let addDivisor = false
    if (dividend == 2147483648) {
        addDivisor = true
        dividend -= divisor
    }
    let quotient = 0
    let dividendBitLength = 0
    let divisorBitLength = 0
    let length = 0
    console.log({dividend, divisor})
    console.log({shift1:dividend >> 1})
    while (dividend >> length > 0) {
        if(divisor >> length > 0) {
            divisorBitLength = length + 1
        }
        dividendBitLength = length + 1
        length++
    }
    console.log({dividendBitLength, divisorBitLength})
    
    for (let i = dividendBitLength - divisorBitLength + 1; i >= 0; i--){
        if (dividend >> i >= divisor){
            quotient += (1 << i)
            dividend -= divisor << i
        }
        console.log({dividend, i, quotient})
    }
    if (addDivisor) quotient += 1
    return negative ? 0-quotient : quotient
};
