/**
 * 2520. Count the Digits That Divide a Number
 * Given an integer num, return the number of digits in num that divide num.

    An integer val divides nums if nums % val == 0.
 * Example 1:
    Input: num = 7
    Output: 1
    Explanation: 7 divides itself, hence the answer is 1.

    Example 2:
    Input: num = 121
    Output: 2
    Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
 */
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const numDigits = num
    .toString()
    .split("")
    .map((v) => parseInt(v));
  if (numDigits.length == 1) return 1;
  let count = 0;
  numDigits.forEach((el) => {
    if (num % el == 0) count++;
  });
  return count;
};
