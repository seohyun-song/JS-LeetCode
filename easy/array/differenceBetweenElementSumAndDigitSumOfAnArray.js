/**
 * 2535. Difference Between Element Sum and Digit Sum of an Array
 * You are given a positive integer array nums.

        ● The element sum is the sum of all the elements in nums.
        ● The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
    Return the absolute difference between the element sum and digit sum of nums.

    Note that the absolute difference between two integers x and y is defined as |x - y|.
 * Example 1:
    Input: nums = [1,15,6,3]
    Output: 9
    Explanation: 
    The element sum of nums is 1 + 15 + 6 + 3 = 25.
    The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
    The absolute difference between the element sum and digit sum is |25 - 16| = 9.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const elementSum = nums.reduce((acc, cur) => acc + cur, 0);
  const digit = nums.join("");
  let digitSum = 0;
  for (let i = 0; i < digit.length; i++) {
    digitSum += parseInt(digit[i]);
  }
  return Math.abs(elementSum - digitSum);
};

// 다른 풀이
var differenceOfSum = function (nums) {
  const elementSum = nums.reduce((acc, cur) => acc + cur, 0);
  const digitSum = nums
    .join("")
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return Math.abs(elementSum - digitSum);
};
