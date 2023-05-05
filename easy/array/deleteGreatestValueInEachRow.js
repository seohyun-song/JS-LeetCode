/**
 * 2500. Delete Greatest Value in Each Row
 * You are given an m x n matrix grid consisting of positive integers.

    Perform the following operation until grid becomes empty:

    ● Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
    ● Add the maximum of deleted elements to the answer.
    
    Note that the number of columns decreases by one after each operation.

    Return the answer after performing the operations described above.
 * Example 1:
    Input: grid = [[1,2,4],[3,3,1]]
    Output: 8
    Explanation: The diagram above shows the removed values in each step.
    - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
    - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
    - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
    The final answer = 4 + 3 + 1 = 8.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let sum = 0;
  // 내림차순 정렬(sort)
  for (let m = 0; m < row; m++) {
    grid[m].sort((a, b) => b - a);
  }
  // 같은 열 각 행의 최댓값 구하기(compare)
  for (let n = 0; n < col; n++) {
    let max = [];
    for (let m = 0; m < row; m++) {
      max.push(grid[m][n]);
    }
    sum += Math.max(...max);
  }
  return sum;
};
