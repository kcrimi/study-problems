// Add any extra import statements you may need here


// Add any helper functions you may need here


function minOverallAwkwardness(arr) {
  // Write your code here
  arr.sort((a,b) => a-b)
  let left = arr.pop()
  let right = left
  let maxAwk = 0
  while (arr.length > 0) {
    let newLeft = arr.pop()
    maxAwk = Math.max(maxAwk, Math.abs(left-newLeft))
    left = newLeft
    let newRight = arr.length > 0 ? arr.pop() : left
    maxAwk = Math.max(maxAwk, Math.abs(right-newRight))
    right = newRight
  }
  return maxAwk
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [5, 10, 6, 8];
var expected_1 = 4;
var output_1 = minOverallAwkwardness(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2, 5, 3, 7];
var expected_2 = 4;
var output_2 = minOverallAwkwardness(arr_2);
check(expected_2, output_2);

// Add your own test cases here
