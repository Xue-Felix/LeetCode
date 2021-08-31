/**
 * 有效括号
 * 
 *  解题思路：
 *    使用栈的原理，先进后出
 *    先将对应的一队放到Map中
 *    循环字符串：
 *      如果当前字符串存在于Map中，则将map中对应的值，放入stack中
 *      如果不存在，则取出stack中的最后一个（stack.pop()）, 判断是否等于当前值，如果不等于直接返回false
 *    最后判断stack中是不是为空
 */
var isValid = function(s) {
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    if(!map.has(s[i])){
      if(stack.pop() != s[i]) return false;
    } else {
      stack.push(map.get(s[i]))
    }
  }
  return stack.length === 0;
};

s = "{[(])}"
console.log(isValid(s))
