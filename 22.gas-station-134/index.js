/**
 * 加油站
 *  方法一：O(n²)
 *    暴力解法，循环遍历每个点，看是否可以走到最后
 *  方法二：O(n)
 *    
 *    
 */
var canCompleteCircuit = function(gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  for(let i = 0; i < gas.length; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
  }
  // 总价耗油量大于总的加油量
  if(totalCost > totalGas) return -1;

  let start = 0;
  let currentGas = 0;

  for(let i = 0; i < gas.length; i++) {
    // 当前油量 - 耗油量 + 当前加油量
    currentGas = currentGas - cost[i] + gas[i];
    // 如果小于0，从下一个开始计算，邮箱置0
    if(currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }
  return start;
};
let gas = [1, 2, 3, 4, 5],
    cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
