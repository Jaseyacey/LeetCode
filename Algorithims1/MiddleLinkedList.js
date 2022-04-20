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
    let fast = slow = head;
    // while fast is not null
    while (fast && fast.next) {
    // move fast to the next node
        fast = fast.next.next;
    // move slow to the next node
        slow = slow.next;
    }
    return slow;
};