// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : integer
 //param C : integer
 //return the head node in the linked list
	reverseBetween : function(A, B, C){
		let head = A
		let steps = 1
		let prevNode = null
		let nodeBeforeSlice = null
		let startSliceNode = null
		let currentNode = A
		while (steps <= C) {
			const nextNode = currentNode.next
			// console.log({steps, data:currentNode.data})
			if (steps == B) {
				// console.log("Start")
				nodeBeforeSlice = prevNode
				startSliceNode = currentNode
			} else if (steps > B) {
				// console.log("over")
				currentNode.next = prevNode
				if (steps == C) {
					// console.log("stop")
					startSliceNode.next = nextNode
					if (B == 1) return currentNode
					nodeBeforeSlice.next = currentNode
					break
				}
			}
			prevNode = currentNode
			currentNode = nextNode
			steps++
		}
		return head
	}
};
