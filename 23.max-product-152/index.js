
/**
 * 
 * 最大乘积因子
 *   
 * 
 * 
 * 
 */
var maxProduct = function(nums) {
  if(nums.length <= 1) return nums[0];

  let maxProductDP = [],
      minProductDP = [];

  maxProductDP[0] = nums[0];
  minProductDP[0] = nums[0];

  let max = nums[0];

  for(let i = 1; i < nums.length; i++) {
    maxProductDP[i] = Math.max(nums[i], nums[i] * maxProductDP[i - 1], nums[i] * minProductDP[i - 1]);
    minProductDP[i] = Math.min(nums[i], nums[i] * maxProductDP[i - 1], nums[i] * minProductDP[i - 1]);
    max = Math.max(maxProductDP[i], max)
  }

  return max
};

const nums = [2,3,-2,4];
console.log(maxProduct(nums));
