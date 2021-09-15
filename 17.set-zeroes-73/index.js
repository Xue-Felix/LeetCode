
/**
 * 矩阵置零实现思路：
 *  1.标记第一行和第一列是否有0(两次循环)
 *  2.然后从第二行，第二列开始循环，判断当前元素是否为0：
 *    如果为0，将当前元素的第一行当前列，第一列当前行设为0： matrix[row] = 0  matrix[col] = 0
 *  3.再次循环第二行和第二列，判断当前行和当前列的第一行，第一列是否等于0，如果等于0，将当前元素设为0：matrix[row][col] = 0
 *  4.因为2,3步循环不到第一行和第二行的情况，所以最后再次判断起始的标记，如果第一行或者第一列有0的情况，将第一行和第一列都设为0
 *  定义firstRowHasZero，firstColHasZero 两个变量，标记第一行或者第一列是否有0
 */
var setZeroes = function(matrix) {
  let firstRowHasZero = false;
  let firstColHasZero = false;
  // 检查第一列是否有0
  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][0] === 0) firstColHasZero = true;
  }
  // 检查第一行是否有0
  for(let i = 0; i < matrix[0].length; i++) {
    if(matrix[0][i] === 0) firstRowHasZero = true;
  }
  // 使用第一行和第一列，来标记其余行列是否含有0
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 1; col < matrix[0].length; col++) {
      if(matrix[row][col] === 0) {
        // 第一列
        matrix[row][0] = 0
        // 第一行
        matrix[0][col] = 0
      }
    }
  }
  // 利用第一行和第一列的标0情况，将matrix中的 数字标0
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 1; col < matrix[0].length; col++) {
      // 第一行或者第一列
      if(matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0
      }
    }
  }
  // 判断标记的第一行是否有0
  if(firstRowHasZero) {
    for(let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  // 判断标记的第一列是否有0
  if(firstColHasZero) {
    for(let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
};

const matrix = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]]

console.log(setZeroes(matrix))
