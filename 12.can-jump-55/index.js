
/**
 * 跳跃游戏：
 *  
 * 
 */
// const canJump = function(nums) {
//   const totalLength = nums.length;
//   const memo = new Array(totalLength).fill(0);
//   memo[totalLength - 1] = 1;
//   for(let i = totalLength - 2; i >= 0; i--) {
//     const maxJump = Math.min(i + nums[i], totalLength - 1);
    
//     for(let j = i + 1; j <= maxJump; j++) {
//       if(memo[j] === 1) {
//         memo[i] = 1;
//         break;
//       }
//     }
//   }
//   if(memo[0] === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const nums = [1,1,1,3,3,4,3,2,4,2];
// console.log(canJump(nums));

/**
 * 跳跃游戏: 理解起来有点儿费劲，学完一遍动态规划可以回过头来多加练习
 *  表格标记
 */
const canJump = function(nums) {
  const totalLength = nums.length;
  const memo = Array(totalLength).fill(0);
  // 最后一个标记为1
  memo[totalLength - 1] = 1;
  
  // 递归
  function jump(position) {
    if(memo[position] === 1) {
      return true;
    } else if(memo[position] === -1) {
      return false;
    }
    
    const maxJump = Math.min(nums[position], totalLength - 1);
    
    for(let i = position + 1; i< maxJump; i++) {
      const jumpResult = jump(i);
      
      if(jumpResult) {
        memo[position] = 1;
        return true;
      }
    }
    memo[position] = -1;
    return false;
  } 
  
  let result = jump(0)
  return result;
}

const nums = [1,1,1,3,3,4,3,2,4,2];
console.log(canJump(nums));
