/**
 * sliding window（滑动窗口）
 */
/**
 * 创建一个Set，不重复长度maxLength
 * 创建两个指针i, j 初始分别指向字符串中的第一个元素
 * 遍历字符串：
 *    如果set中没有s[i]，将set[i]添加到set中，判断maxLength是否大于set长度，如果小于，给maxLength复制为set长度 即：maxLength = set.size
 *    如果存在[i]:
 *        开始从j遍历，使用while遍历，条件是只要set中存在set[i]
 *        set中删除s[j], j++
 *        知道set中不存在s[i]，之后再添加s[i]
 */
// var lengthOfLongestSubstring = function(s) {
//   const set = new Set();
//   let maxLength = 0;

//   if(s.length === 0) return 0;

//   for(let i=0, j=0; i < s.length; i++) {
//     if(set.has(s[i])) {
//       while(set.has(s[i])) {
//         set.delete(s[j])
//         j++;
//       }
//       set.add(s[i])
//     } else {
//       set.add(s[i])
//       maxLength = Math.max(maxLength, set.size);
//     }
//   }
//   return maxLength;
// };

// const str = "abcabcbb"

// console.log(lengthOfLongestSubstring(str))

/**
 *
 * @param { String } s
 * @returns
 */
const lengthOfLongestSubstring = s => {
  if (!s) return 0;
  let set = new Set();
  let maxLength = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
    }
    set.add(s[i]);
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
};

const str = "abcabcbb";

console.log(lengthOfLongestSubstring(str));
