/**
 * 数组去重，判断两个长度是否相等
 */
var containsDuplicate = function(numList) {
  // 边界处理
  if(numList.length <= 1) return false;
  
  const _numList = new Set(numList);

  return _numList.size != numList.length
};
const numList = [0,4,5,0,3,6];
console.log(containsDuplicate(numList));
