/** 
 * 1768. Merge Strings Alternately(교대로 문자열 병합)
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

    Return the merged string.
 * 
 * str[index]: 반환할 문자가 없는 경우 undefined(falsy한 값)반환
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const length = Math.max(word1.length, word2.length);
  let str = "";
  for (let i = 0; i < length; i++) {
    if (word1[i]) str += word1[i];
    if (word2[i]) str += word2[i];
  }
  return str;
};
