//Q1: Add minimum amount of parentheses to make a string of parentheses balanced
//Input: ((( Output: 3
//Input: )( Output: 2
 // "(())(()())"
 // Time: O(n)
 // Space: O(1)

function solve(s: string): number {
  let opens = 0
  let extras = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      opens++
    } else if (opens > 0) {
      opens-- 
    } else {
      extras++
    }
  }
  return opens + extras
}
