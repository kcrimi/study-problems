// Used to recursively make all permutation groupings of numbers
function buildOptions (nums: string): string[] {
    if (nums.length == 1) return [nums]
    const digit = nums[0]
    const options = buildOptions(nums.slice(1))
    const joinOptions = options.map((option) => `${digit}${option}`)
    // Insert a space to split as array later
    const splitOptions = options.map((option) => `${digit} ${option}`)
    return joinOptions.concat(splitOptions)
}
// Recursively find all operation combinations that achieve target
function findEquations(nums: string[], i: number, target:number, prevMult: number, prevOp: string) : string[] {
    if (i == nums.length) {
        // If we have 0 left after closing any multiplications in progress, success with ""
        return prevMult == target ? [""] : []
    }
    let output = []
    const digitString = nums[i]

    const digit = parseInt(digitString)

    if (i == 0) {
        return findEquations(nums, i+1, target-digit, 0, "+")
            .map((option) => digitString+option)
    } else {
        //try multiplication
        let newMult
        let newTarget
        if (prevOp == "*") {
            newMult = prevMult * digit
            newTarget = target
        } else {
            const prevOpMultiplier = prevOp == "-" ? -1 : 1
            newMult = parseInt(nums[i-1]) * digit * prevOpMultiplier
            // undo previous add/sub operation
            newTarget = target + (parseInt(nums[i-1]) * prevOpMultiplier)
        }
        const multiplication = findEquations(nums, i+1, newTarget, newMult, "*")
            .map((option) => "*"+digitString+option)
            
        //try addition
        const additions = findEquations(nums, i+1, target-(prevMult)-digit, 0, "+")
            .map((option) => "+"+digitString+option)

        //try subtraction
        const subtractions = findEquations(nums, i+1, target-(prevMult)+digit, 0, "-")
            .map((option) => "-"+digitString+option)
        return output.concat(additions).concat(subtractions).concat(multiplication)
    }

}

function addOperators(num: string, target: number): string[] {
    //Build options
    const options = buildOptions(num)
        .map((option) => {
            // Split string into array based on the spaces inserted
            return option.split(" ")
        }).filter((option) => {
            // Get rid of options with leading 0s
            return option.find((number) => number[0] == "0" && number.length > 1) == undefined
        })
    

    const solutions = options.reduce((prev, option) => {
        const equations = findEquations(option, 0, target, 0, "+")
        return prev.concat(equations)
    }, new Array<string>())

    return solutions
};
