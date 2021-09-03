/**
 * 螺旋矩阵:
 *  定义方向：direction  往右走right , 往下走down, 往左走left, 往上走top 
 *  初始化边界：
 *    left: 0
 *    right: matrix.length - 1
 *    bottom: matrix[0].length - 1
 *    top: 0
 * 
 *  while循环，当left <= right 和 top <= bottom
 *  判断方向：
 *    当右走时：
 *      循环：初始i = left, 小于right, i++
 *        result.push(matrix[top][i])
 *      循环之后调到下一行top++
 *      改变方向向下走: direction = "down"
 *    
 *    其余方向同理
 */
var spiralOrder = function(matrix) {
  // 边界处理
  if(matrix.length <= 0) return [];
  let left = 0,
      right = matrix[0].length - 1,
      bottom = matrix.length - 1,
      top = 0;
  
  let direction = "right";
  const result = [];
  while(left <= right && top <= bottom) {
      if(direction === "right") {
        for(i = left; i <= right; i++) {
          result.push(matrix[top][i])
        }
        top++;
        direction = "down";
      } else if (direction === "down") {
        for(i = top; i <= bottom; i++) {
          result.push(matrix[i][right])
        }
        right--;
        direction = "left";
      } else if (direction === "left") {
      
        for(i = right; i >= left; i--) {
          result.push(matrix[bottom][i])
        }
        bottom--;
        direction = "top";
      } else if (direction === "top") {
        for(i = bottom; i >= top; i--) {
          result.push(matrix[i][left])
        }
        left++;
        direction = "right";
      } 
  }
  return result;
};

const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]]
console.log(spiralOrder(matrix))