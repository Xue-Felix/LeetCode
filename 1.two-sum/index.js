
/**
 * @param {number[]} numArr
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numArr, target) {
  const numMap = new Map();
  for(let i = 0; i < numArr.length; i++) {
    let complete = target - numArr[i];
    if(numMap.has(complete)) {
      return [numMap.get(complete), i];
    } else {
      numMap.set(numArr[i], i)
    }
  }

  return [];
}
