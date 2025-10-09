 /** class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * } */
class Solution {
    mergeKLists(lists) {
        if (lists.length == 0) return null;
        for (let i = 1; i < lists.length; i++) {
            lists[i] = this.mergeTwoSorted(lists[i], lists[i - 1]);
        }
        return lists[lists.length - 1];
    }
    mergeTwoSorted(list1, list2) {
        let node = new ListNode(0);
        let curr = node;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        if (list1 != null) curr.next = list1;
        else curr.next = list2;
        return node.next;
    }
}


