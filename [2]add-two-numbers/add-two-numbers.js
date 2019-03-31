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
    // 哑节点
    var dummyNode = new ListNode(0);
    var carry = 0, p = l1, q = l2, curNode = dummyNode;
    var x = y = sum =0;
    while (p !== null || q !== null) {
        x = p === null ? 0 : p.val;
        y = q === null ? 0 : q.val;
        sum = x + y + carry;
        carry = parseInt(sum / 10);
        curNode.next = new ListNode(sum % 10);
        curNode = curNode.next;
        if (p !== null) {
            p = p.next;
        }
        if (q !== null) {
            q = q.next;
        }
    }
    if (carry === 1) {
        curNode.next = new ListNode(1);
    }
    return dummyNode.next;
};