/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.lruCache = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const filterLru = this.lruCache.filter(item => item[0] === key)[0];
  if (!filterLru) {
    return -1;
  }
  // 记一次数++
  filterLru[2] = new Date().getTime();
  return filterLru[1];
};

/**
 *
 * 判断lruCache是否存在Key，如果存在直接替换当前值
 *
 * 如果不存在：
 *    判断长度是否到达边界值
 *      Y:
 *        找出getCount最小的值，将getCount最小值的key替换当前的key，再替换当前的值
 *      N:
 *        push当前值 [key, value, getCount]
 *
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果存在，则直接替换
  if (this.get(key) != -1) {
    this.lruCache.filter(item => item[0] === key)[1] = value;
    return;
  }

  // 不存在

  // 未达到容量
  if (this.lruCache.length != this.capacity) {
    this.lruCache.push([key, value, new Date().getTime()]);
    return;
  }

  // 容量已满
  this.lruCache.sort((prev, next) => prev[2] - next[2]);

  this.lruCache[0][0] = key;
  this.lruCache[0][1] = value;
  this.lruCache[0][2] = 0;
};

const lRUCache = new LRUCache(2);

lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1)); // 返回 1
