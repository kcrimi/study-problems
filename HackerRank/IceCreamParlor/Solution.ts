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
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m: number, arr: number[]): number[] {
    // Write your code here
    const pricesSeen = new Map<number,number>()
    for (let i = 0; i < arr.length; i++) {
        if (pricesSeen.has(m-arr[i])) {
            return [pricesSeen.get(m-arr[i])+1, i+1]
        }
        pricesSeen.set(arr[i],i)
    }
    return [-1,-1]
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const m: number = parseInt(readLine().trim(), 10);

        const n: number = parseInt(readLine().trim(), 10);

        const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result: number[] = icecreamParlor(m, arr);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
