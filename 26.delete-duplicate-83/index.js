/**
 * 删除重复节点
 *  思路较为简单：
 *    因为是有序链表，所以只需要遍历一遍即可
 *    当前节点和下一个节点的val值对比，如果相等，则删除下一个节点，否则继续遍历：
 *    curr.val === curr.next.val
 *      删除curr.next: curr.next = curr.next.next
 *    否则：curr = curr.next
 * @param {list} head
 */
const deleteDuplicate = head => {
  if (!head) return head;

  // 指定当前节点
  let curr = head;

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};
