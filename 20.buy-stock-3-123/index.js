/**
 * 买卖股票的最佳时机III -> 动态规划：
 *   动态规划公式: 
 *      [
 *        dp[row][col - 1],
 *        prices[col] - prices[n] + dp[row - 1][n], n=0; n++
 *      ]
 *      去最大值填充到每个元素中
 *  
 */
var maxProfit = function(prices) {
  if(prices.length <= 1) return 0;
  const dp = new Array(3).fill(0).map(() => new Array(prices.length).fill(0));
  for(let row = 1; row < dp.length; row++) {
    let max = -prices[0];
    for(let col = 1; col < dp[1].length; col++) {
      dp[row][col] = Math.max(dp[row][col - 1], prices[col] + max);
      max = Math.max(max, dp[row-1][col] - prices[col]);
    }
  }
  return dp[2][prices.length - 1]
};
const prices = [3,3,5,0,0,3,1,4];
console.log(maxProfit(prices))
// var maxProfit = function(prices) {
//   console.time("max profit:");
//   if(prices.length <= 1) return 0;
//   const dp = new Array(3).fill(0).map(() => new Array(prices.length).fill(0));
//   for(let row = 1; row < dp.length; row++) {
//     for(let col = 1; col < dp[1].length; col++) {
//       let n = 0;
//       let profits = [];
//       while(n < col) {
//         profits.push(dp[row - 1][n] - prices[n]);
//         n++;
//       }
//       dp[row][col] = Math.max(dp[row][col - 1], ...profits);
//     }
//   }
//   console.timeEnd("max profit:");
//   return dp[2][prices.length - 1]
// };
// const prices = [3,3,5,0,0,3,1,4];
// console.log(maxProfit(prices))

// n = 3, col = 3; row = 2;
// {
//   dp[0][3 - 1]
//   dp[1][0] - prices[0] + prices[3]
//   dp[1][1] - prices[1] + prices[3]
//   dp[1][2] - prices[2] + prices[3]
// }
// n = 4, col = 4; row = 2;
// {
//   dp[0][3 - 1]
//   dp[1][0] - prices[0] + prices[4]
//   dp[1][1] - prices[1] + prices[4]
//   dp[1][2] - prices[2] + prices[4]
//   dp[1][3] - prices[3] + prices[4]
// }


