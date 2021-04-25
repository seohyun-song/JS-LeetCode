/*
    Check If the Sentence Is Pangram
    A pangram is a sentence where every letter of the English alphabet appears at least once.
    Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
    -> pangram은 영어 알파벳을 모두 포함한 문자열을 말합니다.
    주어진 문자열은 오직 소문자만 포함하며 해당 문자열이 pangram인 경우 true를 리턴하고 그렇지 않은 경우, false를 리턴하세요.

    Example 1:
    Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
    Output: true
    Explanation: sentence contains at least one of every letter of the English alphabet.

    Exmaple 2:
    Input: sentence = "leetcode"
    Output: false

    Constraints:
    ∙ 1 <= sentence.length <= 1000
    ∙ sentence consists of lowercase English letters
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0; i < alphabets.length ; i++) {
        if(sentence.includes(alphabets[i]) == false) {
            return false;
        }
    }
    return true;
};
