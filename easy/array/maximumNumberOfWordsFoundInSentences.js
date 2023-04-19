/**
 * 2114. Maximum Number of Words Found in Sentences
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
    You are given an array of strings sentences, where each sentences[i] represents a single sentence.

    Return the maximum number of words that appear in a single sentence.
 * Example 1:
    Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
    Output: 6
    Explanation: 
    - The first sentence, "alice and bob love leetcode", has 5 words in total.
    - The second sentence, "i think so too", has 4 words in total.
    - The third sentence, "this is great thanks very much", has 6 words in total.
 */
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let answer = 0;
  for (let i = 0; i < sentences.length; i++) {
    let max = sentences[i].split(" ").length;
    if (max >= answer) answer = max;
  }
  return answer;
};

// 다른 풀이
var mostWordsFound = function (sentences) {
  const max = Math.max(...sentences.map((v) => v.split(" ").length));
  return max;
};
