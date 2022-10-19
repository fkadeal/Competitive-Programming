
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*https://www.hackerrank.com/rest/contests/master/challenges/ctci-bubble-sort/hackers/infkadeal1/download_solution
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
    // Write your code here
    var swaps=0;
    var n = a.length;
    
    for (var i = 0; i < n; i++) {
    
    for (var j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) { 
             var temp1=a[j]
             a[j]=a[j+1]
             a[j+1]=temp1
            swaps++
        }
    }
    
}
console.log(`Array is sorted in ${swaps} swaps.
First Element: ${a[0]}
Last Element: ${a[n-1]}`)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
