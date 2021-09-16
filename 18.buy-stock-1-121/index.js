
/**
 * 买卖股票的最佳时机
 *  把每个点作为卖出点
 *  取当前点往左半部分的最小值，减去最小值，记录最大值，每次和减去之后的做比较
 *  最后返回最大值
 * 
 *  记录数组中的最小价，和最大利润
 *  遍历数组，如果小于当前最小价，赋值最小价
 *  如果当前价格 - 最小家大于最大利润，赋值最大利润
 */
// var maxProfit = function(prices) {
//   let max = 0;
//   for(let i = 1; i < prices.length; i++) {
//     max = Math.max(max, prices[i] - Math.min(...prices.slice(0, i)))
//   }
//   return max;
// };
var maxProfit = function(prices) {
  // 边界处理
  if(prices.length < 1) return 0;
  let maxProfit = 0, minPrice = prices[0];
  for(let i = 1; i < prices.length; i++) {
    if(minPrice > prices[i]) {
      minPrice = prices[i]
    }
    if(maxProfit < prices[i] - minPrice) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))
