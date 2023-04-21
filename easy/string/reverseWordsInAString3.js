/**
 * 557. Reverse Words in a String III
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = s.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split("").reverse().join("");
  }
  return str.join(" ");
};

// 다른 사람 풀이
var reverseWords = function (s) {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i].split("");
    let length = str.length;
    for (let j = 0; j < length / 2; j++) {
      [str[j], str[length - 1 - j]] = [str[length - 1 - j], str[j]]; // 구조분해할당
    }
    arr[i] = str.join("");
  }
  return arr.join(" ");
};
