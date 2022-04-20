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
 var removeNthFromEnd = function(head, n) {
     // create a dummy node
     let dummy = new ListNode(0);
        dummy.next = head;
        // create a pointer to the first node
        let first = dummy;
        // create a pointer to the second node
        let second = dummy;
        // move the second pointer n nodes ahead
        for(let i = 0; i < n; i++) {
            second = second.next;
        } // now second is n nodes ahead of first
        // move the first pointer until second reaches the end
        while(second.next) {
            first = first.next;
            second = second.next;
        }
        // now first is n+1 nodes ahead of the node to be removed
        // set the next of the first node to be the next of the node to be removed
        first.next = first.next.next;
        return dummy.next;
};