// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const minDepth = (node) => {
    if (node.left == null && node.right == null) return 1
    const leftDepth = node.left ? minDepth(node.left) + 1 : Number.MAX_SAFE_INTEGER
    const rightDepth = node.right ? minDepth(node.right) + 1 : Number.MAX_SAFE_INTEGER
    return Math.min(leftDepth, rightDepth)
}

module.exports = { 
 //param A : root node of tree
 //return an integer
	minDepth : function(A){
        return minDepth(A)
	}
}
