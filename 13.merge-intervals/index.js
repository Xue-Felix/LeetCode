/**
 * 区间合并
 *    1.将数组中的区间按照起始位置排序
 *    2.定义current数组记录当前合并的最大区间
 *    3.遍历数组中的每一个区间
 *    4.如果当前区间的起始位置小于等于current的终点位置，则可以继续合并，所以合并并更新current的起始和终止位置。
 *    5.如果当前区间的起始位置大于current大于current的终止位置，则无法合并。所以讲current加入到result里，并用当前的区间替换current的值
 */
var merge = function(intervals) {
  // 边界处理
  if(intervals.length <= 1) return intervals;

  const result = [];

  // 将数组中的区间按照起始位置排序
  intervals.sort((a, b) => (a[0] - b[0]))
  
  let current = intervals[0];

  for(let interval of intervals) {
    if(interval[0] <= current[1]) {
      current[1] = Math.max(current[1], interval[1])
    } else {
      result.push(current);
      current = interval;
    }
  }
  // 最后一个push不进去
  result.push(current)

  return result;
};

const intervals = [[1,3],[2,6],[8,10],[8,18]];
console.log(merge(intervals));
