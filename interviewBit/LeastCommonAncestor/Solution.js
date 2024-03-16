// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

const findPathTo = (node, val) => {
    if (node.data == val) {
        return [val]
    }
    let leftPath = []
    let rightPath = []
    if (node.left != null) {
        leftPath = findPathTo(node.left, val)
        if (leftPath.length > 0) leftPath.unshift(node.data)
    }
    if (node.right != null) {
        rightPath = findPathTo(node.right, val)
        if (rightPath.length > 0) rightPath.unshift(node.data)
    }
    // console.log({leftPath, rightPath})
    return leftPath.length > rightPath.length ? leftPath : rightPath
    
}

module.exports = { 
 //param A : root node of tree
 //param B : integer
 //param C : integer
 //return an integer
	lca : function(A, B, C){
        const path1 = findPathTo(A, B)
        const path2 = findPathTo(A,C)
        // console.log({path1, path2})
        let common = -1
        if (path1.length > 0 && path2.length > 0) {
            for (let i = 0; i < path1.length; i++) {
                if (path1[i] != path2[i]) return common  
                common = path1[i] 
            }
        }
        return common
	}
};
