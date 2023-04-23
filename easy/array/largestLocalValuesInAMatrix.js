/**
 * 2373. Largest Local Values in a Matrix (방향탐색)
 * You are given an n x n integer matrix grid.

    Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

    maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
    In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

    Return the generated matrix.
 * Example 1:
    Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
    Output: [[9,9],[8,6]]
    Explanation: The diagram above shows the original matrix and the generated matrix.
    Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

    Example 2:
    Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
    Output: [[2,2,2],[2,2,2],[2,2,2]]
    Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const length = grid.length;
  const maxLength = length - 2;
  let answer = new Array(maxLength).fill(0).map(() => new Array(maxLength));

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < maxLength; j++) {
      let max = [];
      for (let k = 0; k < 8; k++) {
        let nx = i + 1 + dx[k];
        let ny = j + 1 + dy[k];

        if (nx < 0 || nx > length || ny < 0 || ny > length) {
          continue;
        }
        max.push(grid[nx][ny]);
      }

      answer[i][j] =
        grid[i + 1][j + 1] >= Math.max(...max)
          ? grid[i + 1][j + 1]
          : Math.max(...max);
    }
  }
  return answer;
};
