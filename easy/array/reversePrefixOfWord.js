/**
 * 2000. Reverse Prefix of Word
 * Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

    ● For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
    
    Return the resulting string.
 * Example 1:
    Input: word = "abcdefd", ch = "d"
    Output: "dcbaefd"
    Explanation: The first occurrence of "d" is at index 3. 
    Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
 */
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let answer = "";
  // right pointer
  const firstIdx = word.indexOf(ch);
  // left pointer(i)
  for (let i = 0; i < word.length; i++) {
    if (i <= firstIdx) {
      answer += word[firstIdx - i];
    } else {
      answer += word[i];
    }
  }
  return answer;
};

// 다른 사람 풀이
// two pointer
// 구조분해할당
var reversePrefix = function (word, ch) {
  let chars = word.split("");
  let chIndex = chars.indexOf(ch);
  let length = Math.ceil(chIndex / 2);

  if (chIndex === -1) return word;
  for (let i = 0; i < length; i++) {
    [chars[i], chars[chIndex - i]] = [chars[chIndex - i], chars[i]];
  }

  return chars.join("");
};
