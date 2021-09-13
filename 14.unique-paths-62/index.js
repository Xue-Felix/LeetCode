var uniquePaths = function(m, n) {
  const memo = [];

  for(let i = 0; i < n; i++) {
    memo.push([])
  }

  // 第一行
  for(let row = 0; row < n; row++) {
    memo[row][0] = 1;
  }

  // 第一列
  for(let col = 0; col < m; col++) {
    memo[0][col] = 1;
  }
  
  for(let row = 1; row < n; row++) {
    for(let col = 1; col < m; col++) {
      // 上面的 + 左边的
      memo[row][col] = memo[row-1][col] + memo[row][col-1];
    }
  }
  console.log(memo)
  return memo[n-1][m-1];
};

console.log(uniquePaths(4,5))

