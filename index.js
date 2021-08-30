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
const longestPalindrome = (s) => {
  if(s.length < 2) return s;
  
  let start = 0,
      maxLength = 2;
      
  const assistFn = (left, right) => {
    while(left > 0 && right < s.length && s[left] === s[right]) {
      if(right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  for(let i=0; i<s.length; i++) {
    assistFn(i-1, i+1);
    assistFn(i, i+1);
  }

  return s.substring(start, start + maxLength)
}

const s = "adbbdc";
const str = "abcdbdccd";
console.log(longestPalindrome(str));
/*  ========== 最长回文子串 end ==========  */

