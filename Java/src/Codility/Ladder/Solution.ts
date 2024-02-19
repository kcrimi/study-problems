// incomplete and still not finding the right steps :(

function solution(A: number[], B: number[]): number[] {
    const stepCountWays = new Array(Math.max(...A)).fill(0)
    console.log(stepCountWays)
    const distinctSteps = Array.from(new Set(B)).sort((a,b)=> a-b)
    let prevStepSize = -1
    const output = new Array(A.length)
    for (let i = 0; i < distinctSteps.length; i++) {
        const stepSize = distinctSteps[i]
        // Generate the stepWays for current stepSize
        for (let step = 1; step <= stepCountWays.length; step++) {
            let stepWays = 0

            if (step > 1 ){
                let prev = stepCountWays[step-2]
                let additional = (Math.min((stepSize), step)-1)
                stepWays += prev + additional
                // console.log({stepSize, step, stepWays, prev,additional})
            } else {
                stepWays = 1
            }
            // console.log({stepSize, step, stepWays})
            stepCountWays[step-1] = stepWays
        }
        // console.log (stepCountWays)


        // Populate answers for current step size
        for (let L = 0; L < A.length; L++) {
            if (stepSize == B[L]){
                output[L] = stepCountWays[A[L]-1]
            }
        }
    }
    return output
}
