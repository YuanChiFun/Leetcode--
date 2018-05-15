/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result;
    var a = [0, 0, 0];
    for (var i = 0; i < 3; i++) {

        result = l1 + l2 + a[i];
        if (result >= 10) {
            a[i] = result % 10;
            a[i + 1] = 1;
        } else {
            a[i] = result;
        }
        l1 = l1.next;
        l2 = l2.next;

    }
    return a;
};