//Timing out in long strains
function solution(S: string, P: number[], Q: number[]): number[] {
    return P.map((p, i) => {
        let q = Q[i]
        let min = 4
        for (let j = p; j <= q; j++) {
            switch(S[j]) {
                case 'A':
                    return 1
                case 'C':
                    min = 2
                    break;
                case 'G':
                    min = 3
                    break;
                case 'T':
                    break;
            }
        }
        return min
    })
}

function solution(S: string, P: number[], Q: number[]): number[] {
    return P.map((p, i) => {
        let q = Q[i]
        let min = 4
        const strain = S.substring(p, q+1)
        if (strain.includes('A')){
            return 1
        } else if (strain.includes('C')) {
            return 2
        } else if (strain.includes('G')){
            return 3
        }
        return 4
    })
}
