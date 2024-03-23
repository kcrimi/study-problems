/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeLists(listA: ListNode | null, listB: ListNode | null) {
    if (listA == null) return listB
    if (listB == null) return listA
    let head = null
    let prevNode = null
    while (listA != null && listB != null) {
        let nextNode = null
        if (listA.val < listB.val) {
            nextNode = listA
            listA = listA.next
        } else {
            nextNode = listB
            listB = listB.next
        }
        if (head == null) {
            head = nextNode
        } else {
            prevNode.next = nextNode
        }
        prevNode = nextNode
    }
    prevNode.next = listA != null ? listA : listB
    return head
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length == 0) return null
    while (lists.length > 1) {
        let prevList = null
        lists = lists.reduce((newLists, list, i) => {
            if (i % 2 == 0) {
                if (i == lists.length-1) newLists.push(list)
                prevList = list
            } else {
                newLists.push(mergeLists(prevList, list))
                prevList = null
            }
            return newLists
        }, new Array<ListNode>())
    }
    return lists[0]
};
