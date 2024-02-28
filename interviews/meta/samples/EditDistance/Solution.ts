const within1EditDistance = (s1: string, s2: string): boolean => {
  if (Math.abs(s1.length - s2.length) > 1) return false
  let i1 = 0
  let i2 = 0
  let edits = 0
  while (Math.abs(i1-i2) <= 1 
    && i1 < s1.length && i2 < s2.length 
    && edits <=1
  ) {
    if (s1[i1] == s2[i2]) {
      i1++
      i2++
    } else if (i1+1 < s1.length && s1[i1+1] == s2[i2]) {
      edits++
      i1++
    } else if (i2+1 < s2.length && s2[i2+1] == s1[i1]){
      edits++
      i2++
    }
  }
  edits += (s1.length - i1) + (s2.length - i2)
  
  return edits <= 1
}

console.log(within1EditDistance('dale', 'dale'))
console.log(within1EditDistance('dale', 'ale'))
console.log(within1EditDistance('dle', 'dale'))
console.log(within1EditDistance('dpale', 'dale'))
console.log(within1EditDistance('dpale', 'dalle'))
console.log(within1EditDistance('dale', 'dalepop'))
console.log(within1EditDistance('', 'd'))
console.log(within1EditDistance('', ''))
console.log(within1EditDistance('rabbit', 'abbit'))
console.log(within1EditDistance('rabbit', 'abbitr'))


//Even smaller
const within1EditDistance = (s1: string, s2: string): boolean => {
  let longer = s1.length > s2.length ? s1 : s2
  let shorter = s1.length < s2.length ? s1 : s2
  if (longer.length - shorter.length > 1) return false
  if (longer == shorter) return false
  let edits = 0
  for (let i = 0; i < longer.length; i++) {
    if (longer[i] != shorter[i-edits]) {
      if (edits > 0) return false
      edits++
    }
  }
  return edits <= 1
}

console.log(within1EditDistance('dale', 'dale'))
console.log(within1EditDistance('dale', 'ale'))
console.log(within1EditDistance('dle', 'dale'))
console.log(within1EditDistance('dpale', 'dale'))
console.log(within1EditDistance('dpale', 'dalle'))
console.log(within1EditDistance('dale', 'dalepop'))
console.log(within1EditDistance('', 'd'))
console.log(within1EditDistance('', ''))
console.log(within1EditDistance('rabbit', 'abbit'))
console.log(within1EditDistance('rabbit', 'abbitr'))
console.log(within1EditDistance('abbitr', 'rabbit'))
