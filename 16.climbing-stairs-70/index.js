

/**
 * 爬楼梯：
 *  动态规划，将所有可能性存入数组[]
 *  根据题意，得到的公式为 dp[i] = dp[i-2] + dp[i-1]
 *  dp[0], dp[1]初始值为1，和2：
 *    当有1阶时只有一种爬法，爬一阶，返回 1
 *    当有2阶时有两种爬法: 1,1 2
 *    得到dp[0] = 1   dp[1] = 2
 *  举例： 
 *    i = 4
 *    dp[4-2] = 2
 *    dp[4-1] = 3
 *    dp[4] = 5
 */
var climbStairs = function(n) {
  if(n === 1 || n === 2) return n;
  const dp = []
  dp[0] = 1;
  dp[1] = 2;
  for(let i = 2; i < n; i++) {
    dp[i] = dp[i-2] + dp[i-1]; 
  }
  return dp[n-1];
};
console.log(climbStairs(5))
