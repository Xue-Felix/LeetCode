
/**
 * 解题思路：
 *   三个指针：i, start, end
 *    举例: i = 2
 *         start = i + 1;
 *         end = numList.length
 *        判断numList[i] + numList[start] + numList[end] === 0 即为结果
 *        去重：numList[start] === numList[start - 1] start++
 *             numList[end] === numList[end + 1] end--
 *   排序：从小到大
 *   边界处理：
 *      当数组长度小于3的时候，直接返回[]
 *      循环边界值到numList.length - 2。 原因：因为如果到numList.length-2的时候， i=numList.length-2, start = numList.length-1, end的将无法取值。最后只剩两个值，会造成重复添加
 *   遍历数组： i < numList.length - 2
 *     如果当前数值和前一个数字相等，则跳过这个数
 *     如果不同：
 *       start = i + 1;
 *       end = numList.length;
 *       一切的前提要基于start < end:
 *         查看numList[i]和numList[start]、numList[end]相加结果
 *          如果 结果 < 0: start++
 *          如果 结果 > 0: end--
 *          如果 结果 === 0: 新增到结果中
 *              这里会有个问题，去重问题，如果有两数相邻的问题，后面再进行计算的时候可能会造成重复计算，所以，得再需要做去重计算：
 *              numList[start] === numList[start-1] start++;
 *              numList[end] === numList[end+1] end--;
 *   最后返回结果
 */
var threeSum = function(numList = []) {
  const result = [];

  if(numList.length < 3) return result;
  numList.sort((prev, next) => prev - next)
  let i = 0,
      start = 0,
      end = 0;

  for(i; i < numList.length - 2; i++) {
    if(numList[i] === numList[i-1]) continue;

    start = i + 1;
    end = numList.length - 1;

    // start 和 end 往里面缩
    while(start < end) {
      // 等于0
      if(numList[i] + numList[start] + numList[end] === 0) {
        result.push([numList[i], numList[start], numList[end]]);
        start++;
        end--;
        // 去重
        while(start < end && numList[start] === numList[start - 1]) {
          start++;
        }
        while(start < end && numList[end] === numList[end + 1]) {
          end--;
        }
      } else if(numList[i] + numList[start] + numList[end] < 0) {
        start++;
      } else {
        end--;
      }
    }
  }

  return result;
};
const numList = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(numList))
