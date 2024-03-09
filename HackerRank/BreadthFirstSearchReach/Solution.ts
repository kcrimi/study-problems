'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */
class Node {
    neighbors: number[] = []
}

function bfs(n: number, m: number, edges: number[][], s: number): number[] {
    // Write your code here
    const nodes: Node[] = new Array(n)
    for (let i = 0; i < n; i++) {
        nodes[i] = new Node()
    }
    
    for (let i = 0; i < m; i++) {
        const edge = edges[i]
        nodes[edge[0]-1].neighbors.push(edge[1])
        nodes[edge[1]-1].neighbors.push(edge[0])
    }
    
    const distances: number[] = new Array(n).fill(-1)
    const toSearch: number[] = [s]
    distances[s-1] = 0
    while (toSearch.length > 0) {
        const search = toSearch.shift()
        const neighbors = nodes[search-1].neighbors
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i]
            if (distances[neighbor-1] == -1) {
                distances[neighbor-1] = distances[search-1] + 6
                toSearch.push(neighbor)
            }
        }
        
    }
    return distances.filter((x) => x != 0)
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const m: number = parseInt(firstMultipleInput[1], 10);

        let edges: number[][] = Array(m);

        for (let i: number = 0; i < m; i++) {
            edges[i] = readLine().replace(/\s+$/g, '').split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s: number = parseInt(readLine().trim(), 10);

        const result: number[] = bfs(n, m, edges, s);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}

