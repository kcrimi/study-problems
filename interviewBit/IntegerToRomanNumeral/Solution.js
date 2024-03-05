const roman = [
    {val:1000, char:'M', sub: {val:100, char:'C'}},
    {val:500, char:'D', sub: {val:100, char:'C'}},
    {val:100, char:'C', sub: {val:10, char:'X'}},
    {val:50, char:'L', sub: {val:10, char:'X'}},
    {val:10, char:'X', sub: {val:1, char:'I'}},
    {val:5, char:'V', sub: {val:1, char:'I'}},
    {val:1, char:'I'}
]
var depth = 0
function getRomanNumeral(int) {
    depth++
    if (int == 0) return ''
    let scale = null
    let output = ""
    for (let i = 0; i < roman.length; i++) {
        scale = roman[i]
        if (int >= scale.val) {
            const remainder = int - scale.val
            output = scale.char + getRomanNumeral(remainder)
            break
        }
        if (scale.sub && int >= scale.val - scale.sub.val) {
            const remainder = int - scale.val + scale.sub.val
            output = scale.sub.char + scale.char + getRomanNumeral(remainder)
            break
        }
    }   
    depth--
    return output
}

module.exports = { 
 //param A : integer
 //return a strings
	intToRoman : function(A){
        return getRomanNumeral(A)
	}
};
