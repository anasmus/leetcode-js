/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let node1 = list1;
    let node2 = list2;
    let list3 = null;
    const stack = [];
    while (node1 !== null || node2 !== null) {
        if (node1 !== null && node2 !== null) {
            if (node1.val < node2.val) {
                stack.push(node1.val);
                node1 = node1.next;
            } else {
                stack.push(node2.val);
                node2 = node2.next;
            }
        } else if (node1 !== null) {
            stack.push(node1.val);
            node1 = node1.next;
        } else if (node2 !== null) {
            stack.push(node2.val);
            node2 = node2.next;
        }
    }

    while (stack.length !== 0) {
        list3 = new ListNode(stack.pop(), list3);
    }

    return list3;
};