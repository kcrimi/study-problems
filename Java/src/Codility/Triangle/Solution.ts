// times out in longer runs
function solution(A: number[]): number {
    // Implement your solution here
    for (let i = 0; i < A.length-2; i++) {
        for (let j = i+1; j < A.length-1; j++) {
            for (let k = j+1; k < A.length; k++) {
                let isTriangular = A[i] + A[j] > A[k]
                    && A[j] + A[k] > A[i]
                    && A[k] + A[i] > A[j]
                if (isTriangular) return 1
            }
        }
    }
    return 0
}

//Times out on long problems
function solution(A: number[]): number {
    // Implement your solution here
    if (A.length < 3) return 0
    A.sort((a,b)=>a-b)
    var p = 0
    var q = 1
    var r = 2
    var triangular
    while (p < A.length-2) {
        triangular = 0
        while (r < A.length) {
            while (q < r) {
                if (A[r] + A[p] > A[q]) {
                    triangular++
                    break;
                }
                q++
            }
            if ( A[p] + A[q] > A[r]) {
                triangular++
                break;
            }
            r++
        }
        if (A[q]+A[r] > A[p]) {
            triangular++
            break
        } else {
            triangular = 0
            p++
            q = p+1
            r = q+1
        }
    }
    return Math.floor(triangular/3)
}
