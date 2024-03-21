const teenMap = new Map([
    [0, "Ten"],
    [1, "Eleven"],
    [2, "Twelve"],
    [3, "Thirteen"],
    [4, "Fourteen"],
    [5, "Fifteen"],
    [6, "Sixteen"],
    [7, "Seventeen"],
    [8, "Eighteen"],
    [9, "Nineteen"],
])
const tensMap = new Map([
    [2, "Twenty"],
    [3, "Thirty"],
    [4, "Forty"],
    [5, "Fifty"],
    [6, "Sixty"],
    [7, "Seventy"],
    [8, "Eighty"],
    [9, "Ninety"],
])

const onesMap = new Map([
    [0, ""],
    [1, "One"],
    [2, "Two"],
    [3, "Three"],
    [4, "Four"],
    [5, "Five"],
    [6, "Six"],
    [7, "Seven"],
    [8, "Eight"],
    [9, "Nine"],
])

const placeMap = new Map([
    [5, "Thousand"],
    [8, "Million"],
    [11, "Billion"],
    [14, "Trillion"]
])

function parseNumToWords(num) : string {
    const ones = num % 10
    const tens = ((num - ones) / 10) % 10
    if (tens == 0) {
        return onesMap.get(ones)
    } else if (tens == 1) {
        return teenMap.get(ones)
    }

    let output = tensMap.get(tens)
    if (ones > 0) {
        output += ` ${onesMap.get(ones)}`
    }
    return output
}

function numberToWords(num: number): string {
    if (num == 0) return "Zero"
    let power = 0
    let output = new Array<string>()
    let placeWord = null
    while (num > 0) {
        power++
        // console.log({power, num, output})
        if (placeMap.has(power)) placeWord = placeMap.get(power)
        if (power % 3 == 1) {
            continue
        } else if (power % 3 == 2) {
            // parse by 100
            let digits = num % Math.pow(10, power)
            const word = parseNumToWords(digits / Math.pow(10, power-2))
            if (word.length > 0) {
                if (placeWord) {
                    output.unshift(placeWord)
                    placeWord = null
                }
                output.unshift(word)
            }
            num -= digits
        } else if (power % 3 == 0){
            let digits = num % Math.pow(10, power)
            const word = parseNumToWords(digits / Math.pow(10, power-1))
            if (word.length > 0) {
                if (placeWord) {
                    output.unshift(placeWord)
                    placeWord = null
                }
                output.unshift("Hundred")
                output.unshift(word)
            }
            num -= digits
        }
    }
    return output.join(" ")
    
};
