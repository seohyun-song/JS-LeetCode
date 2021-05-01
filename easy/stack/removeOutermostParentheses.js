/*
    Remove Outermost Parentheses
    A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
    A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
    Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
    Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

    Exaple 1: 
    Input: "(()())(())"
    Output: "()()()"
    Explanation: 
    The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
    After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

    Note:
    S.length <= 10000
    S[i] is "(" or ")"
    *** S is a valid parentheses string

    이 문제는 유효한 괄호를 판별하기 위한 문제가 아니라 가장 바깥은 둘러싸는 괄호를 구분하는 문제이다!!
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let result = '',
        count = 0;
        
    for(var i = 0; i < S.length; i++) {
        if(S[i] == ')') count--;
        if(count > 0) result += S[i];
        if(S[i] == '(') count++;
    }
    return result;
};