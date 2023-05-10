/**
 * 1374. Generate a String With Characters That Have Odd Counts
 * Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

    The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  
 * Example 1:
    Input: n = 4
    Output: "pppz"
    Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
 * Example 2:
    Input: n = 2
    Output: "xy"
    Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".
 */
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let answer = "";
  let oddCount = [];
  const str = "ab";
  // idea!
  if (n % 2 == 0) {
    oddCount.push(n - 1, 1);
  } else {
    oddCount.push(n);
  }

  for (let i = 0; i < oddCount.length; i++) {
    answer += str[i].repeat(oddCount[i]);
  }
  return answer;
};

// 다른 사람 풀이
// for문 없이 구현
// 템플릿 리터럴 백틱(``) : 내장된 표현식을 허용하는 문자열 리터럴입니다. 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있습니다.
// 템플릿 리터럴 안에 ${expression}을 사용하여 표현식을 넣을 수 있습니다.
var generateTheString = function (n) {
  return n % 2 == 0 ? `${"a".repeat(n - 1)}b` : "a".repeat(n);
};
