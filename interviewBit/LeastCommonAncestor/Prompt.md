Problem Description
 
 

Find the lowest common ancestor in an unordered binary tree given two values in the tree.

Lowest common ancestor: the lowest common ancestor (LCA) of two nodes v and w in a tree or directed acyclic graph (DAG) is the lowest (i.e. deepest) node that has both v and w as descendants.

Note:
You are given 2 values. Find the lowest common ancestor of the two nodes represented by val1 and val2
No guarantee that val1 and val2 exist in the tree. If one value doesn't exist in the tree then return -1.
There are no duplicate values.
You can use extra memory, and helper functions, and can modify the node struct but, you can't add a parent pointer.


Input Format
The first argument is a TreeNode A, pointing to the root of the binary tree.
The second argument is an integer B.
The third argument is an integer C.


Output Format
Return an integer, equal to the value of the LCA of B and C.


Example Input


        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2_     0        8
         /   \
         7    4


B = 5
C = 1



Example Output
3


Example Explanation


        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2_     0        8
         /   \
         7    4

For the above tree, the LCA of nodes 5 and 1 is 3.
Please note that LCA for nodes 5 and 4 is 5.
