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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const pairMapping = new Map([
    ['{','}'],
    ['[',']'],
    ['(',')']
])
function isBalanced(s: string): string {
    // Write your code here
    const stack = new Array<string>()
    const chars = s.split("")
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        if (['{','[','('].includes(char)) {
            stack.push(char)
        } else if (stack.length > 0 && char == pairMapping.get(stack[stack.length-1])) {
            // console.log({stack: stack[stack.length-1], char})
            stack.pop()
        } else {
            // console.log("else")
            return 'NO'
        }
        // console.log(stack)
    }

    return stack.length == 0 ? 'YES' : 'NO'
}
'{'
function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const s: string = readLine();

        const result: string = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
