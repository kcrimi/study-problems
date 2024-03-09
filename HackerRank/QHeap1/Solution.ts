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

function main() {
    // Enter your code here
    let nextLine = readLine()
    let heap = new Array<number>()
    while (nextLine) {
        // console.log(nextLine)
        const input = nextLine.split(" ")
        switch (input[0]) {
            // Add to heap
            case '1':
                const numToAdd = parseInt(input[1])
                let position = 0
                while (position < heap.length) {
                    if (numToAdd < heap[position]) break 
                    position++
                }
                heap = heap.slice(0,position).concat([numToAdd], heap.slice(position))
                break
            // Remove from heap
            case '2':
                const numToDel = parseInt(input[1])
                for (let i = 0; i < heap.length; i++) {
                    if (heap[i] == numToDel) {
                        heap = heap.slice(0,i).concat(heap.slice(i+1))
                        break
                    }
                }
                break
            // Print minimum
            case '3':
                console.log(heap[0])
                break
        }
        // console.log(heap)
        nextLine = readLine()
    }
}
