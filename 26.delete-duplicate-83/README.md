# 删除排序链表中的重复元素

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

## 解题思路：
-  因为是有序链表，所以只需要遍历一遍即可
-    当前节点和下一个节点的val值对比，如果相等，则删除下一个节点，否则继续遍历：
-    curr.val === curr.next.val
-      删除curr.next: curr.next = curr.next.next
-    否则：curr = curr.next
