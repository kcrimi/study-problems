'use strict';

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
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n: number, arr: number[]): void {
    // Write your code here
    
    for (let i = 1; i < n; i++) {
        const selected = arr[i]
        let sorted = arr.slice(0,i)
        let unsorted = arr.slice(i+1)
        for (let j = 0; j < sorted.length; j++) {
            if (sorted[j] > selected) {
                arr = sorted.slice(0,j).concat([selected],sorted.slice(j), unsorted)
                break
            }
        }
        console.log(arr.join(" "))
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
