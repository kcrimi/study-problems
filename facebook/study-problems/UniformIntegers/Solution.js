
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
function getUniformIntegerCountInInterval(A, B) {
  let uniforms = 0
  let power = 0
  let upperPower = -1
  let lowerPower = -1
  while (Math.pow(10, power) <= B) {
    if (Math.pow(10, power) <= A) {
      lowerPower = power
    }
    upperPower = power
    power++
  }
  
  let lowerDigit = Math.floor(A / Math.pow(10, lowerPower))
  let upperDigit = Math.floor(B / Math.pow(10, upperPower))
  
  const maxUniforms = 9 * (upperPower - lowerPower + 1)
  const lowerUniform = parseInt(`${lowerDigit}`.repeat(lowerPower+1))
  const upperUniform = parseInt(`${upperDigit}`.repeat(upperPower+1))
  const lowerMissedUniforms = A <= lowerUniform ? lowerDigit - 1 : lowerDigit
  const upperMissedUniforms = B < upperUniform ? 9 - upperDigit + 1 : 9 - upperDigit
  //console.log({maxUniforms, upperPower, lowerPower, lowerUniform, upperUniform, lowerMissedUniforms, upperMissedUniforms})
  return maxUniforms - lowerMissedUniforms - upperMissedUniforms
}
