/* 
    Given a string s consists of upper/lower-case alphabets and ampty space 
    characters ' ', return the length of last word(last word means the last
    appearing word if loop from left to right) in the string.
    If the last word does not exist, return 0;
    **Note: A word is defined as a maximal substring consisting of non-space characters only.
 */
var lengthOfLastWord = function(s) {
    //양쪽 끝 공백은 단어가 될 수 없음 ex)'a '
    var str = s.trim().split(' ');
    return str[str.length-1].length;
};