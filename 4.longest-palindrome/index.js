
/**
 * 最大回文子串：
 *    思路：
 *      以每一个元素为中心点并记录为start，对比两边字符串(s[start-1]与s[start+1])是否相等，如果相等，则记录当前的子串的长度。
 *
 *    分两种情况 ababc, adbbdc，第二种我们可能很容易看出来dbbd是回文子串，但是按照上述思路解题就会有问题：
 *      即如果以第一个b为中心，d和b并不相等，所以最后得到答案也不会计算出最后的回文子串。
 *      其实很简单，只需要再多出一种情况对比start和start+1的情况即可，也就是相邻的两个值，下面具体说明。
 *    1. ababc情况：
 *      以每一个元素为中心，比如第二个a为中心, 则判断s[left] === s[right]，并依次判断s[left--] === s[right++]，同时判断边界问题。
 *    2. adbbdc：
 *      和1的判断条件的差异就是s[left] === s[left+1]，判断两个相邻的字符串，再循环判断
 * 
 *    根据上述思路代码逻辑：
 *      1.如果s长度小于2的情况直接返回
 *      2.定义start记录左边的索引和maxLength记录最长回文串长度
 *      3.help function:
 *        while循环条件：左边不越界，右边不越界，同时，中间轴的两边字符串相等
 *        判断是否需要更新最大子串长度，如果更新，赋值maxLength为子串的长度right - left + 1，且记录start位置
 *        接着进行 left--, right++
 *          
 *      4.循环比较字符串2种情况
 *        1. 两个相邻: i, i+1
 *        2. 两个不相邻: i-1, i+1
 *      5.返回回文子串: s.substring[start, start + maxLength]
 */

var longestPalindrome = function(s) {
  if(s.length < 2) return s;
  let start = 0,
      maxLength = 1;
  
  var expandAroundCenter = (left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      // 判断是否需要更新最大长度及最大字符串的起始位置
      if(right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        // 记录最左边的起始位置
        start = left
      }
      left--;
      right++;
    }
  }
  
  for(let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1)
    expandAroundCenter(i, i + 1)
  }
  
  return s.substring(start, start + maxLength)
};

const s = "adbbdc";
console.log(longestPalindrome(s))
