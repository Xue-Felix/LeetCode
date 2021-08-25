
/**
 * 两数之和
 * 给定一个数组和target，返回两数之和=target的下标
 */
/*  ========== 两数之和 start ==========  */
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


/**
 * 无重复字符的最长子串
 *  定义一个Set和maxLength
 *  定义两个指针i, j，分别指向字符串的第一位s[0]
 *    循环遍历字符串：
 *    判断set中是否存在[i]
 *      不存在，set中添加s[i]，赋值maxLength
 *      存在，开始从j遍历，使用while遍历，条件为set中含有s[i]，删除set中的s[j]， 
 */
const lengthOfLongestSubstring = (s) => {
  const set = new Set;
  let maxLength = 0,
      i = 0,
      j = 0;
  for( i = 0; i < s.length; i++) {
    if(!set.has(s[i])) {
      set.add(s[i]);
      if(maxLength < set.size) maxLength = set.size;
    } else {
      while(set.has(s[i])) {
        set.delete(s[j])
        j++
      }
      set.add(s[i])
    }
  }
  return maxLength;
}
const s = "abca43";
console.log(lengthOfLongestSubstring(s));



