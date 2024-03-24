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
    path = Array<TreeNode>()
    
    constructor(root: TreeNode | null) {
        this.root = root
        let node = root
        this.path.push(this.root)
        while (node.left != null) {
            node = node.left
            this.path.push(node)
        }
    }

    next(): number {
        let node = this.path.pop()
        let parent = this.path.length == 0 ? null : this.path[this.path.length-1]

        let newChild
        if (parent == null) {
            this.root = node.right
            newChild = this.root
        } else {
            parent.left = node.right
            newChild = parent.left
        }
        // rebuild path from newChild
        while (newChild != null) {
            this.path.push(newChild)
            newChild = newChild.left
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
