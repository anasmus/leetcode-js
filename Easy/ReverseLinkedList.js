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
var reverseList = function (head) {
    let reverseHead = null;
    let newNode;

    for (let node = head; node !== null; node = node.next) {
        newNode = new ListNode(node.val, reverseHead);
        reverseHead = newNode;
    }

    return reverseHead;
};