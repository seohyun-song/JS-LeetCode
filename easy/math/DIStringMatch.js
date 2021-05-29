/*
    DI String Match
    A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

    s[i] == 'D' if perm[i] > perm[i + 1].
    s[i] == 'I' if perm[i] < perm[i + 1], and
    Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
    -> s.length = n이면 perm array의 length 는 n+1
    perm요소는 0 ~ n까지의 숫자
    s[i] == 'I'이면 i번째 요소는 i+1번째 요소의 수 보다 작아야함
    s[i] == 'D'이면 i번째 요소는 i+1번째 요소의 수 보다 커야함
    ** two pointer 활용 **
    만약 n=1이고 s[i] == 'I'이면 perm의 i번째 요소가 i+1번째 요소보다 작으려면
    0이 되야한 즉, 최솟값이 되면 항상 만족

    Example 1:
    Input: s = "IDID"
    Output: [0,4,1,3,2]

    Example 2:
    Input: s = "III"
    Output: [0,1,2,3]

    Constraints:
    1 <= s.length <= 105
    s[i] is either 'I' or 'D'.
 */

/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    var result = [],
        minVal = 0,
        maxVal = s.length;
    for(var i = 0; i < s.length + 1; i++) {
        s[i] == 'I' ? result.push(minVal++) : result.push(maxVal--);
    }
    return result;
    
};