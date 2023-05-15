/**
 * 1979. Find Greatest Common Divisor of Array
 * Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

  The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
 * 
 * 유클리드 호제법
 * GCD(a,b) = GCD(b,r)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let value = Math.max(...nums);
  let divider = Math.min(...nums);
  let remainder = value % divider;

  while (remainder > 0) {
    value = divider;
    divider = remainder;
    remainder = value % divider;
  }
  return divider;
};
