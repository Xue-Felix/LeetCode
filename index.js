/*  ========== 两数之和 start ==========  */
/**
 * 两数之和
 * 给定一个数组和target，返回两数之和=target的下标
 */
// function sum(arr, target) {
//   const map = new Map();
//   for(let i=0; i < arr.length; i++) {
//     const complete = target - arr[i];
//     if(map.has(complete)) {
//       return [map.get(complete), i];
//     } else {
//         map.set(arr[i], i);
//     }
//   }
//   return [];
// }
// const arr = [1, 22, 3, 4, 15, 8, 5]
// console.log(sum(arr, 9))
/*  ========== 两数之和 end ==========  */

/*  ========== 无重复字符的最长子串长度 start ==========  */
/**
 * 无重复字符的最长子串
 *  定义一个Set和maxLength
 *  定义两个指针i, j，分别指向字符串的第一位s[0]
 *    循环遍历字符串：
 *    判断set中是否存在[i]
 *      不存在，set中添加s[i]，赋值maxLength
 *      存在，开始从j遍历，使用while遍历，条件为set中含有s[i]，删除set中的s[j]，
 */
// const lengthOfLongestSubstring = (s) => {
//   const set = new Set;
//   let maxLength = 0,
//       i = 0,
//       j = 0;
//   for( i = 0; i < s.length; i++) {
//     if(!set.has(s[i])) {
//       set.add(s[i]);
//       if(maxLength < set.size) maxLength = set.size;
//     } else {
//       while(set.has(s[i])) {
//         set.delete(s[j])
//         j++
//       }
//       set.add(s[i])
//     }
//   }
//   return maxLength;
// }
// const s = "abca43";
// console.log(lengthOfLongestSubstring(s));
/*  ========== 无重复字符的最长子串长度 end ==========  */

/*  ========== 最长回文子串 end ==========  */
/**
 * 解题思路：
 *  回文子串就是以中轴为中心，对称的两边相等 比如：aba  acbca  cbdbc，所以实现的时候相当于 str[center--] == str[center++]，具体实现如下：
 *   当字符串长度小于2的时候，可以判定为最长回文串，直接返回
 *   "adbbdc" 和 "abcdbdccd"
 *   会出现两种情况： dbbc   abcba
 *    那么出现这样情况会执行两种形式的遍历，下面开始实现：
 *    定义start记录最长子串left位置，和maxLength最长回文串长度。
 *    辅助函数（避免代码冗余）：
 *      边界处理：left>0 right<s.length
 *      中轴两边相等: s[left] === s[right]
 *      如果maxLength小于right - left + 1 -> 回文串长度，对maxLength重新赋值。 maxLength=right - left + 1，在记录最左边位置start = left;
 *      循环比较left--, right++
 *    开始循环字符串，执行两次辅助函数分别对比中轴两边和中轴相邻值:
 *      中轴两边: i-1, i+1
 *      中轴响铃: i, i+1
 *    返回子串: return s.substring(start, start + maxLength)
 */
// const longestPalindrome = s => {
//   if (s.length < 2) return s
//   let start = 0,
//     maxLength = 2
//   const assistFn = (left, right) => {
//     while (left > 0 && right < s.length && s[left] === s[right]) {
//       if (right - left + 1 > maxLength) {
//         maxLength = right - left + 1
//         start = left
//       }
//       left--
//       right++
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     assistFn(i - 1, i + 1)
//     assistFn(i, i + 1)
//   }
//   return s.substring(start, start + maxLength)
// }
// const s = 'adbbdc'
// const str = 'abcdbdccd'
// console.log(longestPalindrome(str))
/*  ========== 最长回文子串 end ==========  */



/*  ========== 三数之和 start ==========  */
/**
 * 三数之和
 *  [-1, 0, 1, 2, -1, -4]  -> 输出[-1, 0, 1]
 *   
 *  开始循环数组索引为i，以i恒不变，start=i+1为开头边界，arr.length为尾部边界end。 在将start和end往里缩进计算start + end + arr[i]
 * 
 *  边界处理：
 *    数组数量小于3直接返回[]
 *  对数组排序
 *  循环遍历数组，以numList.length - 2为边界
 *    重复处理（会出现重复添加的情况）：numList[i] === numList[i-1]情况跳过
 *    赋值start = i+1, end = arrList.length-1
 *    start，和end开始往里缩 while(start < end)：
 *      和为0时(numList[i] + numList[start] + numList[end] === 0):
 *        push结果result.push([numList[i], numList[start], numList[end]])
 *        start++;
 *        end--;
 *        去重问题:同上述情况一样遇到相邻值相等时候跳过:
 *          while(start < end && numList[start] === numList[start - 1]) start++;
 *          while(start < end && numList[end] === numList[end + 1]) end--;
 *          
 *      和小于0时(numList[i] + numList[start] + numList[end] < 0):
 *        start++
 *      和大于0时(numList[i] + numList[start] + numList[end] > 0):
 *        end--
 *  最后返回结果
 */
// const threeSum = (numList) => {
//   const result = [];
//   if (numList.length < 3) return result;

//   numList.sort((a, b) => a - b);

//   let i = 0,
//     start = 0,
//     end = 0;

//   for (i; i < numList.length - 2; i++) {
//     // 边界处理
//     if (numList[i] === numList[i - 1]) continue;
//     start = i + 1;
//     end = numList.length - 1;
//     // 两边开始往里缩
//     while (start < end) {
//       // 和 === 0时
//       if (numList[i] + numList[start] + numList[end] === 0) {
//         result.push([numList[i], numList[start], numList[end]]);
//         start++;
//         end--;
//         while (start < end && numList[start] === numList[start - 1]) {
//           start++;
//         }

//         while (start < end && numList[end] === numList[end + 1]) {
//           end--;
//         }
//       } else if (numList[i] + numList[start] + numList[end] < 0) {
//         start++;
//       } else {
//         end--;
//       }
//     }

//   }
//   return result;
// }
// const numList = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(numList))

// 三数之和：重复练习
// const threeSum = (numList) => {
//   const result = [];
//   if(numList.length < 3 ) return result;
//   // 排序
//   numList.sort((a, b) => a - b);
  
//   // 三个指针：i, start, end
//   let i = 0,
//       start = 0,
//       end = 0;
      
//   for(i; i < numList.length - 2; i++) {
//     // 重复情况处理: 跳出当前循环
//     if(numList[i] === numList[i - 1]) continue;
    
//     // 赋值开始遍历
//     start = i + 1;
//     end = numList.length - 1;
    
//     // 开始往里缩
//     while(start < end) {
      
//       // 三种情况：numList[i] + numList[start] + numList[end] === 0  <0  >0
//       if(numList[i] + numList[start] + numList[end] === 0) {
//         result.push([numList[i], numList[start], numList[end]])
//         start++;
//         end--;
        
//         // 再次处理重复情况
//         while(start < end && numList[start] === numList[start - 1]) {
//           start++;
//         }
//         while(start < end && numList[end] === numList[end + 1]) {
//           end--;
//         }
//       } else if(numList[i] + numList[start] + numList[end] < 0) {
//         start++;
//       } else {
//         end--;
//       }
//     }
//   }
//   return result;
// }
// const numList = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(numList))
/*  ========== 三数之和 end ==========  */


/*  ========== 有效串 start ==========  */
/**
 * 
 * 利用栈的原理：先进后出
 *  定义Map：定义好相对应的串
 *  定义stack
 *  循环字符串：
 *    判断Map中是否存在当前的子串：
 *      如果存在：将对应的值(map.get(key))push到stack中
 *      如果不存在：查看是否相等，如果不相等: 直接返回false
 *  最后需要判断stack是否为空，为空代表着正确，如果存在值，代表有问题
 */
// const isValid = (s) => {
//   const map = new Map();
//   map.set("(", ")");
//   map.set("[", "]");
//   map.set("{", "}");
//   const stack = [];
//   for(let i = 0; i < s.length; i++) {
//     if(!map.has(s[i])){
//       if(stack.pop() != s[i]) return false;
//     } else {
//       stack.push(map.get(s[i]))
//     }
//   }
//   return stack.length === 0
// }
// s = "{[()]}"
// console.log(isValid(s));
/*  ========== 三数之和 end ==========  */


/*  ========== 异位词分组 start ==========  */
// const groupAnagrams = (words) => {
//   const map = new Map();
//   const result = [];
//   // 边界处理
//   if(words.length <= 0) return result;
//   for(let word of words) {
//     // 创建26位的字母计次的数组，初始值为0
//     const letterCounts = new Array(26).fill(0)

//     for(let i = 0; i < word.length; i++) {
//       // 计算ASCII码
//       const ascii = word[i].charCodeAt() - 97;
//       letterCounts[ascii]++;
//     }
//     // console.log(word)
//     const key = letterCounts.join("-");
//     if(map.has(key)) {
//       map.set(key, [...map.get(key), word]);
//     } else {
//       map.set(key, [word]);
//     }
//   }
  
//   for(let arr of map) {
//     result.push(arr[1]);
//   }

//   return result;
// }
// // const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const words = ["bdddddddddd","bbbbbbbbbbc"];
// console.log(groupAnagrams(words));
/*  ========== 异位词分组 end ==========  */


/*  ========== 最大子序和 start ==========  */
/**
 * 核心考察动态规划：
 *  边界处理
 *  定义一个数组：
 *    抉择是需要重新以当前值开一个数组，还是保留原数组
 *    初始化memo[0] = nums[0]
 *  定义max记录最大值
 *  取最大值：Math.max(memo[i-1]+nums[i], nums[i])
 *  与max对比取最大值：Math.max(memo[i], max); 
 *  返回最大值
 */
// const maxSubArray = nums => {
//   if(nums.length === 1) return nums[0];
//   const memo = [];
//   memo[0] = nums[0];
//   let max = nums[0];
//   for(let i = 1; i < nums.length; i++) {
//     memo[i] = Math.max(memo[i - 1] + nums[i], nums[i] )
//     console.log(memo)
//     max = Math.max(max, memo[i]);
//   }
//   return max;
// }
// const maxSubArray = (nums) => {
//   // 边界
//   if(nums.length === 1) return nums[0];
//   let memo = [],
//       max = nums[0]
//   memo[0] = nums[0];
//   for(let i = 1; i < nums.length; i++) {
//     memo[i] = Math.max(nums[i] + memo[i - 1], nums[i])
//     max = Math.max(memo[i], max);
//   }
//   return max;
// }
// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums));
/*  ========== 最大子序和 end ==========  */

/*  ========== 合并区间 start ==========  */

/**
 * 边界处理
 * 对数组进行排序，按照每个元素的第一个值进行排序
 * 定义当前最大区间值current，循环每个元素:
 *  判断 current[1] >= interval[0], 如果大于，将current[1]赋值比较current[1]与interval[1]
 *  如果小于，result中push(current) current = interval
 * 因最后一个永远都遍历不到，最后处理需最后一个值进行push(current)
 */
// var merge = function(intervals) {
//   // 边界处理
//   if(intervals.length <= 1) return intervals;

//   // 排序
//   intervals.sort((a, b) => (a[0] - b[0]))
//   const result = [];
//   let current = intervals[0]
//   for(let interval of intervals) {
//     if(current[1] >= interval[0]) {
//       current[1] = Math.max(current[1], interval[1])
//     } else {
//       result.push(current);
//       current = interval;
//     }
//   }
//   result.push(current);
//   return result;
// };
// const intervals = [[1,3],[2,6],[8,10],[8,18]];
// console.log(merge(intervals));
/*  ========== 合并区间 end ==========  */


/*  ========== 不同路径 start ==========  */
/**
 * 不同路径。使用动态规划
 *  先按照行，列填充数据
 *  
 */
// var uniquePaths = function(m, n) {
//   // 填充列再填充行
//   const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
//   // 行
//   for(let row = 0; row < n; row++) {
//     dp[0][row] = 1;
//   }
//   // 列
//   for(let col = 0; col < m; col++) {
//     dp[col][0] = 1;
//   }
  
//   for(let row = 1; row < n; row++) {
//     for(let col = 1; col < m; col++) {
//       dp[col][row] = dp[col][row - 1] + dp[col-1][row]
//     }
//   }
//   return dp[m-1][n-1];
// }
// console.log(uniquePaths(4, 5))
/*  ========== 不同路径 end ==========  */

/*  ========== 加一 start ==========  */
// const plusOne = (digits) => {
//   for(let i = digits.length - 1; i >= 0; i--) {
//     if(digits[i] !== 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
  
//   return [1, ...digits];
// }
// const digits = [9,9,9,9,9]
// console.log(plusOne(digits))
/*  ========== 加一 end ==========  */

/*  ========== 爬楼梯 start ==========  */
// const climbStairs = function(n) {
//   if(n <= 2) return n;
//   const dp = [];
//   dp[0] = 1;
//   dp[1] = 2;
//   for(let i = 2; i < n; i++) {
//     dp[i] = dp[i - 2] + dp[i - 1];
//   }
//   return dp[n-1];
// }
// console.log(climbStairs(5))
/*  ========== 爬楼梯 end ==========  */


/*  ========== 矩阵置零 start ==========  */
const setZeroes = function(matrix) {
  let firstRowHasZero = false;
  let firstColHasZero = false;
  // 标记列
  for(let i = 0; i < matrix.length; i++) {
      console.log(i)
    if(matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }
  // 标记行
  for(let i = 0; i < matrix[0].length; i++) {
    if(matrix[0][i] === 0) {
      firstRowHasZero = true;
    }
  }
  
  // 当前元素所在的第一行和第一列置零
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 1; col < matrix[0].length; col++) {
      if(matrix[row][col] === 0) {
        matrix[0][col] = 0
        matrix[row][0] = 0
      }
    }
  }
  
  // 当前元素置零
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 1; col < matrix[0].length; col++) {
      if(matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  // 第一行
  if(firstRowHasZero) {
    for(let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  // 第一列
  if(firstColHasZero) {
    for(let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}
const matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(matrix))
/*  ========== 矩阵置零 end ==========  */


