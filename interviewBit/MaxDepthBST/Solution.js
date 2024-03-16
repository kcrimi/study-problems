// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const maxDepth = (node) => {
    const leftDepth = node.left ? maxDepth(node.left) : 0
    const rightDepth = node.right ? maxDepth(node.right) : 0
    return Math.max(leftDepth, rightDepth) + 1
}

module.exports = { 
 //param A : root node of tree
 //return an integer
	maxDepth : function(A){
        return maxDepth(A)
	}
};
