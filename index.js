
/**
 * 两数之和
 * 给定一个数组和target，返回两数之和=target的下表
 */

function sum(arr, target) {
  const map = new Map();
  for(let i=0; i < arr.length; i++) {
    const complete = target - arr[i];
    if(map.has(complete)) {
      return [map.get(complete), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [];
}
const arr = [1, 22, 3, 4, 15, 8, 5]
console.log(sum(arr, 9))
