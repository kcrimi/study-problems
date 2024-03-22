// Checking, 13 tests time out


/**
 * @param {number} N
 * @param {number[]} L
 * @return {number}
 */
function getMaxVisitableWebpages(N, L) {
  // Write your code here
  const checked = new Set()
  const memo = new Array(L.length).fill(-1)
  let longest = 0
  for (let i = 0; i < L.length; i++) {
    if (checked.has(i)) continue
    let page = i
    let visited = new Set()
    // go through loop of pages
    while (!visited.has(page)) {
      visited.add(page)
      checked.add(page)
      page = L[page]-1
    }
    let length = visited.size
    if (memo[page] > -1) {
      length += memo[page]
    }
    longest = Math.max(longest, length)
    //console.log({i, length:visited.size, checked:checked})
  }
  return longest
}
