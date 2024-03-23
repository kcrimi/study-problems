
//Right but a bit slow with string building
function addBinary(a: string, b: string): string {
    let carryover = "0"
    let output = ""
    while (a.length > 0 || b.length > 0) {
        const aDigit = a.length > 0 ? a[a.length-1] : "0"
        const bDigit = b.length > 0 ? b[b.length-1] : "0"
        if (aDigit == bDigit) {
            output = carryover + output
            carryover = aDigit
        } else {
            const nextDigit = carryover == "0" ? "1" : "0"
            output = nextDigit + output
        }
        a = a.length > 0 ? a.slice(0, a.length-1) : a
        b = b.length > 0 ? b.slice(0, b.length-1) : b
        console.log(output)
    }
    if (carryover == "1") output = carryover + output
    return output
};

// No string building but still just as slow
function addBinary(a: string, b: string): string {
    let carryover = 0
    let aI = a.length - 1
    let bI = b.length - 1
    let output = ""
    while (aI >= 0 || bI >= 0 || carryover > 0) {
        const aBit = aI >= 0 && a[aI] == "1" ? 1 : 0
        const bBit = bI >= 0 && b[bI] == "1" ? 1 : 0
        const sum = aBit + bBit + carryover
        const digit = sum % 2
        carryover = sum >= 2 ? 1 : 0
        output = digit + output
        if (aI >= 0) aI--
        if (bI >= 0) bI--
        console.log({aI, bI, carryover, output})
    }
    return output
};
