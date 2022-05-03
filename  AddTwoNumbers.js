// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
     // create a new list node
    let dummy = new ListNode(0);
    // create a pointer to the current node
    let curr = dummy;
    // create a pointer to the current node
    let carry = 0;
    // loop through the two lists
    while (l1 || l2) {
        // create a variable to store the sum of the two nodes
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        // update the carry
        carry = Math.floor(sum / 10);
        // update the current node
        curr.next = new ListNode(sum % 10);
        // update the current node
        curr = curr.next;
        // update the current node
        l1 = l1 ? l1.next : null;
        // update the current node
        l2 = l2 ? l2.next : null;
    }
    if (carry) {
        curr.next = new ListNode(carry);
    }
    return dummy.next;
};