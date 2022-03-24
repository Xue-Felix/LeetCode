/**
 * 反转链表
 * null -> 1 -> 2 -> 3 -> 4 -> 5
 *
 * 5 -> 4 -> 3 -> 2 -> 1 -> null
 * 定义一个prev指针，指向当前节点的前一个节点，然后把当前节点的next指针指向前一个节点，
 * 再把当前节点的prev指针指向当前节点的next指针，最后把当前节点的next指针指向null
 * @param {Array}} head
 * @returns
 */
const reverseList = head => {
  if (!head) return;

  let prev = null;
  let curr = head;

  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
