function ListNode(val, next) {
  this.value = val ? val : 0;
  this.next = next ? next : null;
}

// 创建
const node1 = new ListNode(1);
node1.next = new ListNode(2);
// 1 -> 2

// 插入
const node3 = new ListNode(3);
node3.next = node1.next;
node1.next = node3;
// 1 -> 3 -> 2

// 删除
node1.next = node1.next.next;
// 1 -> 3
console.log(node1.value);
