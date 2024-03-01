module.exports = { 
    //param A : array of array of integers 
    //return nothing 
    solve : function(A){ 
        let n = A.length
        let subN = n
        while (subN > 1) {
            row = (n - subN) / 2
            for (let column = row; column < subN + row - 1; column++) {
                // console.log({n, subN, row, column})
                let buffer = A[row][column]
                rSet = [column, n-1-row, n-1-column, row]
                cSet = [n-1-row, n-1-column, row, column]
                for (let i = 0; i < rSet.length; i++) {
                    let newBuffer = A[rSet[i]][cSet[i]]
                    A[rSet[i]][cSet[i]] = buffer
                    buffer = newBuffer
                }
            }
            subN -= 2
        }
    }
};
