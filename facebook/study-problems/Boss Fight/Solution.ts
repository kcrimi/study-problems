
/**
 * @param {number} N
 * @param {number[]} H
 * @param {number[]} D
 * @param {number} B
 * @return {number}
 */
function getMaxDamageDealt(N, H, D, B) {
  let maxDamage = 0
  let warrior1 = 0
  let nextWarrior = null
  for (let i = 0; i <=1; i++) {
    for (let warrior2 = 0; warrior2 < N; warrior2++) {
      if (warrior1 == warrior2) continue
      const damageDone = H[warrior1] / B * D[warrior1] 
        + H[warrior2] /B * D[warrior2]
        + Math.max(H[warrior1] / B * D[warrior2], H[warrior2] / B * D[warrior1])
      if (damageDone > maxDamage) {
        nextWarrior = warrior2
        maxDamage = damageDone
      }
    }
    warrior1 = nextWarrior
  }
  
  return maxDamage
}
