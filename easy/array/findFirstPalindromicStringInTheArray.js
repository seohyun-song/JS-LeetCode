/**
 * 2108. Find First Palindromic String in the Array
 * Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

    A string is palindromic if it reads the same forward and backward.
 * Example 1:
    Input: words = ["abc","car","ada","racecar","cool"]
    Output: "ada"
    Explanation: The first string that is palindromic is "ada".
    Note that "racecar" is also palindromic, but it is not the first.
 * 
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  let answer = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].split("").reverse().join("") == words[i]) {
      answer = words[i];
      break;
    }
  }
  return answer;
};

// 다른 사람 풀이
// ★ two pointer
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isPalindrome = true;

    for (let j = 0; j < word.length / 2; j++) {
      // left word, right word (two pointer)
      if (word[j] !== word[word.length - j - 1]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) return word;
  }

  return "";
};
