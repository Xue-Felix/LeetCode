/**
 * 买卖股票的最佳时机II：
 *  分两个阶段：上涨、下跌
 *  上涨记录最顶点
 *  下跌记录最低点
 *  累加最大利润
 */
var maxProfit = function(prices) {
  
  // 边界
  if(prices.length < 0) return 0;
  
  let valley = prices[0], // 底部
    peak = prices[0],     // 顶部
    profit = 0;
  let i = 0;
  
  while(i < prices.length - 1) {
    // 下跌
    while(i < prices.length - 1 && prices[i] >= prices[i+1]) {
      i++;
    }
    // 记录底部
    valley = prices[i];
    
    // 上涨  防止越界
    while(i < prices.length - 1 && prices[i] <= prices[i+1]) {
      i++;
    }
    // 记录顶部
    peak = prices[i];
  
    profit += peak - valley;
  }
  return profit;
};
const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))
