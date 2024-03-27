let map
function numIslands(grid: string[][]): number {
    map = grid
    let islands = 0
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[0].length; j++) {
            const islandFound = exploreNode(i, j, islands+1)
            if (islandFound)  islands++
        }
    }
    return islands
}

function exploreNode(x, y, islandNum): boolean {
    //console.log({x,y, map, islandNum})
    if (!map[x][y].substring) return false
    if ('1' === map[x][y]) {
        map[x][y] = islandNum
        const neighborsDiff = [[0,-1],[1,0],[0,1],[-1,0]]
        for (let [diffX, diffY] of neighborsDiff) {
            if (x+diffX >= 0 && x+diffX < map.length && y+diffY >=0 && y+diffY < map[0].length){
                exploreNode(x+diffX, y+diffY,islandNum)
            }
        }
        return true
    } else if ('0' === map[x][y]){
        map[x][y] = -1
    }
    return false
}
