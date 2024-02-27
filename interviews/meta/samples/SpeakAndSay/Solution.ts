const _ = require('lodash');

function speakAndSay(N:number){
  let sequence = '1'
  console.log(sequence)
  for (let i = 1; i <= N; i++) {
    let string = sequence.toString()
    let chars = string.split('')
    let prevVal = '-1'
    let prevCount = 0
    let i = 0
    let newOutput = chars.reduce((prev, val, i) => {
      if (val != prevVal) {
        if (prevVal != '-1') {
          prev = prev + prevCount + prevVal
        }
        prevVal = val
        prevCount = 0
      }

      prevCount++
      return prev
    }, '')
    newOutput = newOutput + prevCount + prevVal
    console.log(newOutput)
    sequence = newOutput
  }
}

speakAndSay(6)
