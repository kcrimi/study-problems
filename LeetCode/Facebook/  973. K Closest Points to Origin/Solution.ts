function kClosest(points: number[][], k: number): number[][] {
    points.sort(([aX, aY], [bX, bY]) => {
        const aDist = Math.sqrt(Math.pow(0-aX, 2) + Math.pow(0-aY, 2))
        const bDist = Math.sqrt(Math.pow(0-bX, 2) + Math.pow(0-bY, 2))
        return aDist-bDist
    })
    return points.slice(0,k)
};
