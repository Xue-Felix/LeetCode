
/**
 *  最大自序和： 考察动态规划
 *    面临抉择：
 *      是需要新开数组，还是需要延续数组 
 *    定义一个数组并初始化第一个元素memo[0] = arr[0]和max记录最大值
 *    遍历数组，
 */
var maxSubArray = function(nums) {  
  // 边界处理
  if(nums.length == 1) return nums[0];
  const memo = [];
  
  memo[0] = nums[0];
  let max = nums[0];
  
  for(let i = 1; i < nums.length; i++) {
    memo[i] = Math.max( nums[i] + memo[i-1], nums[i])
    max = Math.max(memo[i], max)
  }
  return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));