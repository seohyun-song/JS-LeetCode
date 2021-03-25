/*
    Count Negative Numbers in a Sorted Matrix
    Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
    Example 1:
    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    Output: 8
    Explanation: There are 8 negatives number in the matrix.

    Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 100
    -100 <= grid[i][j] <= 100

    .flat([depth]) : 중첩 배열의 요소를 하나로 이어붙인 새로운 배열을 반환함
    depth: 중첩 배열 구조를 평탄화 할 때 사용할 깊이 값. 기본값 1

*/
var countNegatives = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] < 0) count++;
        }
    }
    return count;

    // 다른 사람 풀이
    // console.log( grid.flat())
    // return grid.flat().filter(ele => ele < 0).length;
};