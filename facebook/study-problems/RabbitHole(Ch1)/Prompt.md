You're having a grand old time clicking through the rabbit hole that is your favorite online encyclopedia.
The encyclopedia consists of 
�
N different web pages, numbered from 
1
1 to 
�
N. Each page 
�
i contains nothing but a single link to a different page 
�
�
L 
i
​
 .
A session spent on this website involves beginning on one of the 
�
N pages, and then navigating around using the links until you decide to stop. That is, while on page 
�
i, you may either move to page 
�
�
L 
i
​
 , or stop your browsing session.
Assuming you can choose which page you begin the session on, what's the maximum number of different pages you can visit in a single session? Note that a page only counts once even if visited multiple times during the session.
Constraints
2
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
2≤N≤500,000
1
≤
�
�
≤
�
1≤L 
i
​
 ≤N
�
�
≠
�
L 
i
​
 ≠i
Sample test case #1
N = 4
L = [4, 1, 2, 1]
Expected Return Value = 4
Sample test case #2
N = 5
L = [4, 3, 5, 1, 2]
Expected Return Value = 3
Sample test case #3
N = 5
L = [2, 4, 2, 2, 3]
Expected Return Value = 4
Sample Explanation
In the first case, you can visit all 
4
4 pages in a single browsing session if you begin on page 
3
3. For example, you can visit the sequence of pages 
3
→
2
→
1
→
4
3→2→1→4.
In the second case, you can only visit at most 
3
3 different pages 
−
− for example, the sequence of pages 
3
→
5
→
2
3→5→2.
In the third case, you can only visit at most 
4
4 different pages 
−
− for example, the sequence of pages 
5
→
3
→
2
→
4
5→3→2→4.
