/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
     // create a dummy node
    let first = middle = head;
    // while first is not null
    while (first && first.next) {
    // move first to the next node
        first = fast.next.next;
    // move middle to the next node
        middle = middle.next;
    }
    // return the middle node
    return middle;
};