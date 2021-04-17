/*
    Split a String in Balanced Strings
    Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
    Given a balanced string s, split it in the maximum amount of balanced strings.
    Return the maximum amount of split balanced strings.

    Example 1:
    Input: s = "RLRRLLRLRL"
    Output: 4
    Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

    Example 2: 
    Input: s = "LLLLRRRR"
    Output: 1
    Explanation: s can be split into "LLLLRRRR".

    Constraints: 
    1 <= s.length <= 1000
    s[i] is either 'L' or 'R'.
    s is a balanced string.
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let result = 0;
    for(var i = 0; i < s.length; i++) {
        s[i] == 'L' ? count++ : count--;
        if(count == 0) result++;
    }
    return result;
};