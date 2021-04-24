/*
    You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
    Return the number of consistent strings in the array words.

    Example 1:
    Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
    Output: 2
    Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

    Constraints:
    1 <= words.length <= 104
    1 <= allowed.length <= 26
    1 <= words[i].length <= 10
    The characters in allowed are distinct.
    words[i] and allowed contain only lowercase English letters.

    String.prototype.includes():
    includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지 판별하고, 그 결과를 true혹은
    false로 반환합니다. 
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let result = 0;
    for(var i = 0; i < words.length; i++) {
        for(var j = 0; j < words[i].length; j++) {
            if( allowed.includes(words[i][j]) ) { count++; } 
        }
        if( words[i].length == count ) { result++; }
        count = 0;
    }
    return result;
};