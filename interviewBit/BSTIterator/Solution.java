/**
 * Definition for binary tree
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

public class Solution {
    private TreeNode root;

    public Solution(TreeNode root) {
        this.root = root;
    }

    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return root != null;
    }

    /** @return the next smallest number */
    public int next() {
        TreeNode node = root;
        TreeNode parent = null;
        while (node.left != null) {
            parent = node;
            node = node.left;
        }
        if (parent!= null) {
            parent.left = node.right;
        } else {
            root = node.right;
        }
        return node.val;
    }
}

/**
 * Your Solution will be called like this:
 * Solution i = new Solution(root);
 * while (i.hasNext()) System.out.print(i.next());
 */
