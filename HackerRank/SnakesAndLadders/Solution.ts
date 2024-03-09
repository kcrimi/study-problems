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
 * Complete the 'quickestWayUp' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY ladders
 *  2. 2D_INTEGER_ARRAY snakes
 */

function quickestWayUp(ladders: number[][], snakes: number[][]): number {
    // Write your code here
    const board = new Array(100).fill(0)
    for (let i = 0; i < ladders.length; i++) {
        const ladder = ladders[i]
        board[ladder[0]-1] = ladder[1]-1
    }
    for (let i = 0; i < snakes.length; i++) {
        const snake = snakes[i]
        board[snake[0]-1] = snake[1]-1
    }
    
    const queue = [0]
    const rolls = new Array(100).fill(0)
    while (queue.length > 0) {
        const currentSpace = queue.shift()
        for (let i=1; i <=6; i++) {
            let nextSpace = currentSpace + i
            if (board[nextSpace] != 0) nextSpace = board[nextSpace]
            
            if (rolls[nextSpace] == 0 || rolls[nextSpace] > rolls[currentSpace] + 1) {
                rolls[nextSpace] = rolls[currentSpace] + 1
                queue.push(nextSpace)
                if (nextSpace == 99) break
            }
        }
    }
    return rolls[99]

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        let ladders: number[][] = Array(n);

        for (let i: number = 0; i < n; i++) {
            ladders[i] = readLine().replace(/\s+$/g, '').split(' ').map(laddersTemp => parseInt(laddersTemp, 10));
        }

        const m: number = parseInt(readLine().trim(), 10);

        let snakes: number[][] = Array(m);

        for (let i: number = 0; i < m; i++) {
            snakes[i] = readLine().replace(/\s+$/g, '').split(' ').map(snakesTemp => parseInt(snakesTemp, 10));
        }

        const result: number = quickestWayUp(ladders, snakes);

        ws.write(result + '\n');
    }

    ws.end();
}
