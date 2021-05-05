/*
    Remove All Adjacent Duplicates In String
    Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
    We repeatedly make duplicate removals on S until we no longer can.
    Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
    -> 바로 옆에 붙은 문자가 같을 경우 그 문자열을 삭제하고 남은 문자열을 리턴하라
    
    Example 1:
    Input: "abbaca"
    Output: "ca"
    Explanation: 
    For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

    Note:
    1 <= S.length <= 20000
    S consists only of English lowercase letters.
 */

/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
    var stack = [];
    for(var i = 0; i < S.length; i++) {
        stack[stack.length - 1] == S[i] ? stack.pop() : stack.push(S[i]);
    }
    return stack.join('');
};