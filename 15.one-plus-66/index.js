/**
 * 加一
 *  从后往前循环
 *  两种情况：
 *    当前是否是9，如果不是9，直接将当前数值+1，然后返回
 *    如果是9，设置为0
 *    最后避免是[0,0,0,0,0]的情况，在数组最前面添加1
 */
var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] != 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0
    }
  }
  return [1, ...digits];
};

const digits = [9,9,9,9,9]
console.log(plusOne(digits))