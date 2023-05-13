/**
 * 2185. Counting Words With a Given Prefix
 * You are given an array of strings words and a string pref.

  Return the number of strings in words that contain pref as a prefix.

  A prefix of a string s is any leading contiguous substring of s.
 * Example 1:
  Input: words = ["leetcode","win","loops","success"], pref = "code"
  Output: 0
  Explanation: There are no strings that contain "code" as a prefix.
 */
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let answer = 0;
  words.forEach((el) => {
    if (el.slice(0, pref.length) == pref) answer++;
  });
  return answer;
};

// 다른 풀이
// String.startsWith(searchString) : 대상 문자열이 주어진 문자로 시작하면 true, 아니면 false반환
var prefixCount = function (words, pref) {
  let count = 0;
  for (const word of words) {
    if (word.startsWith(pref)) count++;
  }
  return count;
};
