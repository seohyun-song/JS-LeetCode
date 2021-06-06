/*
    Check if Word Equals Summation of Two Words
    The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

    The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

    For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
    You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.
    Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

    Example 1:
    Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
    Output: true
    Explanation:
    The numerical value of firstWord is "acb" -> "021" -> 21.
    The numerical value of secondWord is "cba" -> "210" -> 210.
    The numerical value of targetWord is "cdb" -> "231" -> 231.
    We return true because 21 + 210 == 231.

    Constraints:
    1 <= firstWord.length, secondWord.length, targetWord.length <= 8
    firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive.

 */
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    return parseInt(numericWord(firstWord)) + parseInt(numericWord(secondWord)) == parseInt(numericWord(targetWord)) ? true : false;
    
    
};

function numericWord(word) {
    var strArr = word.split('');
    var numericVal = '';
    for(var i = 0; i < strArr.length; i++) {
        switch(strArr[i]) {
            case 'a':
                numericVal += '0'
                break;
            case 'b':
                numericVal += '1'
                break;
            case 'c':
                numericVal += '2'
                break;
            case 'd':
                numericVal += '3'
                break;
            case 'e':
                numericVal += '4'
                break;
            case 'f':
                numericVal += '5'
                break;
            case 'g':
                numericVal += '6'
                break;
            case 'h':
                numericVal += '7'
                break;
            case 'i':
                numericVal += '8'
                break;
            case 'j':
                numericVal += '9'
                break;
            
        }
    }
    return numericVal;
}


// 다른 사람 풀이
/*
    array.map():
    배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
 */
var isSumEqual = function (s, t, target) {
    let ALPHA_INDEX_MAP = {a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9};

    const numVal = (s) =>
        s
            .split("")
            .map((ch) => ALPHA_INDEX_MAP[ch])
            .join("");

    return +numVal(target) === +numVal(s) + +numVal(t);
};