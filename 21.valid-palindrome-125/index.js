/**
 * 校验回文串 
 */
var isPalindrome = function(s) {
  let subStr = s.toLowerCase().replace(/[\W_]/g, "");
  let start = 0,
      end = subStr.length - 1;
  while(start < end) {
    if(subStr[start] != subStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
const str = "0P";
console.log(isPalindrome(str))
