/**
 * Created by kevin on 4/27/16.
 */
function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var binary = (N >>> 0).toString(2);

    var longest = 0;
    var current = -1;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            if (current > longest){
                longest = current;
            }
            current = 0;
        } else if (current != -1) {
            current++;
        }
    }
    return longest;
}