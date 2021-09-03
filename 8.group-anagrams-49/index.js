/**
 * 异位词分组
 *   边界处理：
 *     长度小于等于0时直接返回[];
 *   定义一个map
 *   给每个单词创建一个26位长度且初始值为0的数组: new Array(26).fill(0)   
 *   遍历单词，使用ascii计次，给每个字母计次
 *   之后得到一个单词中字母出现次数的数组
 *   然后join成字符串 array.join("-")
 *   判断Map中是否存在join之后的字符串 key：
 *    如果存在：往值里面push值，或者使用展开运算符 [...map.get(key), word]
 *    如果不存在：设置当前key，并设置值为数组 map.set(key, [word])
 *   最后遍历map，往result中push存值
 *   返回result
 */
var groupAnagrams = function(words) {
  const map = new Map();
  const result = [];
  // 边界处理
  if(words.length <= 0) return [];

  for(let word of words) {
    const characters = new Array(26).fill(0);
    
    for(let i = 0; i < word.length; i++) {
      const ascii = word.charCodeAt(i) - 97
      characters[ascii]++
    }

    const key = characters.join("-");
    if(map.has(key)) {
      map.set(key, [...map.get(key), word])
    } else {
      map.set(key, [word]);
    }
  }
  for(const arr of map) {
    result.push(arr[1])
  } 
  return result;
}
// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const words = ["bdddddddddd","bbbbbbbbbbc"];
console.log(groupAnagrams(words));
