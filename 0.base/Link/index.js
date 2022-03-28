function LinkNode(val, next) {
  this.value = val ? val : 0;
  this.next = next ? next : null;
}

// 创建
// const node1 = new ListNode(1);
// node1.next = new ListNode(2);
// // 1 -> 2

// // 插入
// const node3 = new ListNode(3);
// node3.next = node1.next;
// node1.next = node3;
// // 1 -> 3 -> 2

// // 删除
// node1.next = node1.next.next;
// // 1 -> 3
// console.log(node1.value);

/**
 * 新增节点
 * 查找某个节点
 * 查找某个节点的前一个节点
 * 插入节点
 * 删除某个节点
 * 打印链表元素
 * 获取链表长度
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    const node = new Node(val);

    let temp = this.head;

    if (this.head) {
      // 一直循环到最后一个指针
      while (temp.next) {
        temp = temp.next;
      }

      // 指向新的node
      temp.next = node;
    } else {
      // 如果没有头结点，就把创建的节点赋值给head
      this.head = node;
    }
    this.length++;
  }

  find(value) {
    let temp = this.head;

    // 遍历，如果值相等就返回
    while (temp) {
      if (temp.val === value) {
        return temp;
      }
      temp = temp.next;
    }
    return temp;
  }

  // 查找某一节点的前一个节点
  findPrev(value) {
    let temp = this.head;

    while (temp.next) {
      if (temp.next.val === value) {
        return temp;
      }
      temp = temp.next;
    }

    return temp;
  }

  // 插入一个节点 , 在val后面插入insertVal
  insert(val, insertVal) {
    let newNode = new Node(insertVal);

    let temp = this.find(val);

    newNode.next = temp.next;

    temp.next = newNode;
  }

  // 删除某个节点
  delete(val) {
    this.findPrev(val).next = this.find(val).next;
    this.length--;
  }

  print() {
    if (this.length === 0) {
      console.log('链表为空');
      return;
    }

    let temp = this.head;

    let res = '';

    while (temp) {
      res += `${temp.val} -> `;
      temp = temp.next;
    }
    console.log('打印链表 :>> ', res.slice(0, res.length - 4));
  }

  // 获取链表长度
  getLength() {
    return this.length;
  }
}

const l1 = new LinkNodeList(); // 定义一个链表

l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4); // 添加 1，2，3，4

l1.insert(3, 100); // 插入 3，5
l1.insert(2, 20); // 插入 3，5

l1.delete(2);

l1.print();

console.log('getLength --> ', l1.getLength());
