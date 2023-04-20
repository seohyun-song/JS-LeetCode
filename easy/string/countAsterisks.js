/**
 * 2315. Count Asterisks
 * You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

    Return the number of '*' in s, excluding the '*' between each pair of '|'.

    Note that each '|' will belong to exactly one pair.
 * Example 1:
    Input: s = "l|*e*et|c**o|*de|"
    Output: 2
    Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
    The characters between the first and second '|' are excluded from the answer.
    Also, the characters between the third and fourth '|' are excluded from the answer.
    There are 2 asterisks considered. Therefore, we return 2.
 */
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let arr = s.split("|");
  let str = "";
  let result = 0;
  for (let i = 0; i < arr.length; i += 2) {
    str += arr[i];
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "*") result++;
  }
  return result;
};
