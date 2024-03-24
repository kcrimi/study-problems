/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    root: TreeNode | null

    constructor(root: TreeNode | null) {
        this.root = root
    }

    next(): number {
        let node = this.root
        let parent = null
        while (node.left != null) {
            parent = node
            node = node.left
        }
        if (parent == null) {
            this.root = node.right
        } else {
            parent.left = node.right
        }
        return node.val
    }

    hasNext(): boolean {
        return this.root != null
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
