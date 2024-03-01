Problem Description
 
 

You are given a N x N 2D matrix A representing an image.

Rotate the image by 90 degrees (clockwise).

You need to do this in place. Update the given matrix A.

Note: If you end up using an additional array, you will only receive a partial score.



Problem Constraints
1 <= N <= 1000



Input Format
First argument is a 2D matrix A of integers



Output Format
Rotate the given 2D matrix A.



Example Input
Input 1:

 [
    [1, 2],
    [3, 4]
 ]
Input 2:

 [
    [1]
 ]


Example Output
Output 1:

 [
    [3, 1],
    [4, 2]
 ]
Output 2:

 [
    [1]
 ]


Example Explanation
Explanation 1:

 After rotating the matrix by 90 degree:
 1 goes to 2, 2 goes to 4
 4 goes to 3, 3 goes to 1
Explanation 2:

 2D array remains the ssame as there is only element.
