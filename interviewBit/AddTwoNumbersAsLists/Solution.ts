// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

function llToNumber(node) {
        let sum = 0
        let multiplier = 1
        while (node != null) {
            sum += (node.data * multiplier)
            node = node.next
            multiplier *= 10
        }
        return sum
    }
    
function numberToLl(n) {
    const stringN = n.toString()
    let prevNode = null
    for (let i = 0; i < stringN.length; i++) {
        let newNode = new Node(parseInt(stringN[i]))
        if (prevNode != null) {
            newNode.next = prevNode
        }
        prevNode = newNode
    }
    return prevNode
}

module.exports = { 
 //param A : head node of linked list
 //param B : head node of linked list
 //return the head node in the linked list
    addTwoNumbers : function(A, B){
        let prevNode = null
        let firstNode = null
        let carryover = 0
        let a = A
        let b = B
        while (a != null || b != null || carryover > 0) {
            const aVal = a ? a.data : 0
            const bVal = b ? b.data : 0
            const sum = aVal + bVal + carryover
            const val = sum % 10
            const newNode = new Node(val)
            carryover = (sum - val) / 10
            if (prevNode) {
                prevNode.next = newNode
            } else {
                firstNode = newNode
            }
            prevNode = newNode
            a = a ? a.next : null
            b = b ? b.next : null
        }
        return firstNode
	},
};
