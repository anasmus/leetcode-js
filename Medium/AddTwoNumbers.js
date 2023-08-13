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
var addTwoNumbers = function (l1, l2) {
    const listToNumber = (linkedList) => {
        let numberString = '';
        for (let node = linkedList; node !== null; node = node.next) {
            numberString += node.val.toString();
        }
        return BigInt(numberString.split('').reverse().join(''));
    }
    const n1 = listToNumber(l1);
    const n2 = listToNumber(l2);
    console.log(n1);
    console.log(n2);
    const n3 = n1 + n2;
    const n3String = n3.toString();
    let l3 = null;
    for (let digit of n3String) {
        l3 = new ListNode(parseInt(digit), l3);
    }
    return l3;
};