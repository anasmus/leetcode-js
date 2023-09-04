/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const stack = [];
    for (let node = head; node !== null; node = node.next) {
        stack.push(node);
    }

    let start = 0;
    let end = stack.length - 1;
    let current = start;

    while (start < end) {
        if (current === start) {
            stack[current].next = stack[end];
            start++;
            current = end;
        } else if (current === end) {
            stack[current].next = stack[start];
            end--;
            current = start;
        }
    }
    stack[current].next = null;
};