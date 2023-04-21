/**
 * 2413. Smallest Even Multiple
 * Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 * Example 1:
 * Input: n = 6
    Output: 6
    Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
 */
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return n % 2 == 0 ? Math.max(2, n) : n * 2;
};
