
# 两数之和
> 给定一个整数numbers数组和一个整数目标值target，请在该数组中找出和为目标值target的那两个整数，并返回他们的数组下标。

## 解题思路
1. 创建个map（key: numbers[i]值，value: i下标）
2. 循环遍历numbers
3. 使用target减numbers[i]得到complete值，在map中查找
  1. 如果查找到，返回[map.get(complete), i]
  2. 查找不到，进行存放 map.set(numbers[i], i)
4. 默认返回空数组[]

