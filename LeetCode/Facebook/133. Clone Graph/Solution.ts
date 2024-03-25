/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */
var nodes: Array<Node| null>
function cloneGraph(node: Node | null): Node | null {
	nodes = new Array<Node|null>(101).fill(null)
    if (node == null) return null
    return cloneNode(node)
};

function cloneNode(node: Node): Node {
    const newNode = new Node(node.val, new Array<Node>())
    nodes[node.val] = newNode
    for (let neighbor of node.neighbors) {
        if (nodes[neighbor.val] == null) {
            cloneNode(neighbor)
        }
        newNode.neighbors.push(nodes[neighbor.val])
    }
    return newNode
}
