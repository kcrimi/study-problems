You are the manager of a mail room which is frequently subject to theft. A period of 
�
N days is about to occur, such that on the 
�
ith day, the following sequence of events will occur in order:
A package with a value of 
�
�
V 
i
​
  dollars will get delivered to the mail room (unless 
�
�
=
0
V 
i
​
 =0, in which case no package will get delivered).
You can choose to pay 
�
C dollars to enter the mail room and collect all of the packages there (removing them from the room), and then leave the room
With probability 
�
S, all packages currently in the mail room will get stolen (and therefore removed from the room).
Note that you're aware of the delivery schedule 
�
1
.
.
�
V 
1..N
​
 , but can only observe the state of the mail room when you choose to enter it, meaning that you won't immediately be aware of whether or not packages were stolen at the end of any given day.
Your profit after the 
�
Nth day will be equal to the total value of all packages which you collected up to that point, minus the total amount of money you spent on entering the mail room.
Please determine the maximum expected profit you can achieve (in dollars).
Note: Your return value must have an absolute or relative error of at most 
1
0
−
6
10 
−6
  to be considered correct.
Constraints
1
≤
�
≤
4
,
0
0
0
1≤N≤4,000
0
≤
�
�
≤
1
,
0
0
0
0≤V 
i
​
 ≤1,000
1
≤
�
≤
1
,
0
0
0
1≤C≤1,000
0
.
0
≤
�
≤
1
.
0
0.0≤S≤1.0
Sample test case #1
N = 5
V = [10, 2, 8, 6, 4]
C = 5
S = 0.0
Expected Return Value = 25.00000000
Sample test case #2
N = 5
V = [10, 2, 8, 6, 4]
C = 5
S = 1.0
Expected Return Value = 9.00000000
Sample test case #3
N = 5
V = [10, 2, 8, 6, 4]
C = 3
S = 0.5
Expected Return Value = 17.00000000
Sample test case #4
N = 5
V = [10, 2, 8, 6, 4]
C = 3
S = 0.15
Expected Return Value = 20.10825000
Sample Explanation
In the first case, packages will never be stolen. You should therefore enter the mail room just once, on the final day, at which point there are sure to be 
5
5 packages there with a total value of 
1
0
+
2
+
8
+
6
+
4
=
3
0
10+2+8+6+4=30 dollars. Subtracting the 
5
5-dollar fee for entering the mail room, your profit is guaranteed to be 
3
0
−
5
=
2
5
30−5=25 dollars.
In the second case, each package is sure to be stolen at the end of the day on which its delivered. You should enter the mail room on days 
1
1, 
3
3, and 
4
4, each time collecting just the package delivered on that day. This yields a guaranteed profit of 
1
0
+
8
+
6
−
(
3
∗
5
)
=
9
10+8+6−(3∗5)=9 dollars.
In the third case, on each day, there's a 
5
0
50% chance that all packages in the mail room will be stolen. You should enter the mail room on days 
1
1, 
3
3, 
4
4, and 
5
5. Note that, when you enter on day 
3
3, there will be a 
5
0
50% chance of the room having 
2
2 packages (with values of 
2
2 and 
8
8 dollars), and a 
5
0
50% chance of the room having just 
1
1 package (worth 
8
8 dollars).
In the fourth case, you should only enter the mail room on days 
1
1 and 
5
5.
