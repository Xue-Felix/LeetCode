/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 迭代法
 * 合并链表：
 *  创建一个新链表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode();

  let curr = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;

  return head.next;
};

// 递归法
var mergeTwoLists_recurrence = function (list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists_recurrence(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists_recurrence(list1, list2.next);
    return list2;
  }
};
