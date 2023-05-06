/**
 * 1725. Number Of Rectangles That Can Form The Largest Square
 * You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

    You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

    Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

    Return the number of rectangles that can make a square with a side length of maxLen.
 * Example 1:
    Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
    Output: 3
    Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
    The largest possible square is of length 5, and you can get it out of 3 rectangles.
 */
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  // 정사각형 만들 수 있는 length배열 만들기
  const square = rectangles.map((el) => Math.min(...el));

  // 가장 큰 정사각형 만들 수 있는 개수 구하기
  return square.filter((v) => v == Math.max(...square)).length;
};
