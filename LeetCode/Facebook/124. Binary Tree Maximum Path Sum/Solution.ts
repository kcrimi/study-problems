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
var max
function maxPathSum(root: TreeNode | null): number {
    max = Number.MIN_SAFE_INTEGER
    maxPath(root)
    return max
};

function maxPath(node: TreeNode | null): number {
    if (node == null) return 0
    const leftSum = Math.max(maxPath(node.left), 0)
    const rightSum = Math.max(maxPath(node.right), 0)
    const maxIncludingNode = node.val + leftSum + rightSum
    max = Math.max(max, maxIncludingNode)
    return (Math.max(leftSum, rightSum) + node.val)
}

