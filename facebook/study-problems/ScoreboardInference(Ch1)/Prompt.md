https://www.metacareers.com/profile/coding_puzzles?puzzle=348371419980095&view_as_user_id=232754233246837

You are spectating a programming contest with 
�
N competitors, each trying to independently solve the same set of programming problems. Each problem has a point value, which is either 1 or 2.
On the scoreboard, you observe that the 
�
ith competitor has attained a score of 
�
�
S 
i
​
 , which is a positive integer equal to the sum of the point values of all the problems they have solved.
The scoreboard does not display the number of problems in the contest, nor their point values. Using the information available, you would like to determine the minimum possible number of problems in the contest.
Constraints
1
≤
�
≤
5
0
0
,
0
0
0
1≤N≤500,000
1
≤
�
�
≤
1
,
0
0
0
,
0
0
0
,
0
0
0
1≤S 
i
​
 ≤1,000,000,000
Sample test case #1
N = 6
S = [1, 2, 3, 4, 5, 6]
Expected Return Value = 4
Sample test case #2
N = 4
S = [4, 3, 3, 4]
Expected Return Value = 3
Sample test case #3
N = 4
S = [2, 4, 6, 8]
Expected Return Value = 4
Sample Explanation
In the first case, it's possible that there are as few as 
4
4 problems in the contest, for example with point values 
[
1
,
1
,
2
,
2
]
[1,1,2,2]. The 
6
6 competitors could have solved the following subsets of problems:
Problem 
1
1 (
1
1 point)
Problem 
3
3 (
2
2 points)
Problems 
2
2 and 
3
3 (
1
+
2
=
3
1+2=3 points)
Problems 
1
1, 
2
2, and 
4
4 (
1
+
1
+
2
=
4
1+1+2=4 points)
Problems 
2
2, 
3
3, and 
4
4 (
1
+
2
+
2
=
5
1+2+2=5 points)
All 
4
4 problems (
1
+
1
+
2
+
2
=
6
1+1+2+2=6 points)
It is impossible for all 
6
6 competitors to have achieved their scores if there are fewer than 
4
4 problems.
In the second case, one optimal set of point values is 
[
1
,
1
,
2
]
[1,1,2].
In the third case, one optimal set of point values is 
[
2
,
2
,
2
,
2
]
[2,2,2,2].
