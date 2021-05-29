/*
    Sum of Digits in Base K
    Given an integer n (in base 10) and a base k, return the sum of the digits
    of n after converting n from base 10 to base k.
    After converting, each digits should be interpreted as a base 10 number, and the sum should be
    returned in base 10.
    -> 10진수로 표현된 숫자를 k 진수로 표현하고 그 숫자의 각 자릿수를 더한 값을 리턴하라.

    Example 1:
    Input: n = 34, k = 6
    Output: 9
    Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

    Example 2:
    Input: n = 10, k = 10
    Output: 1
    Explanation: n is already in base 10. 1 + 0 = 1.

    Constraints:
    1 <= n <= 100
    2 <= k <= 10

    Number.ptorotype.toString(): 특정한 Number객체를 나타내는 문자열을 반환

    Converting a string to a number using plus operator(+)
    
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return n.toString(k).split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur));
};

// 다른 사람 풀이
var sumBase = function(n, k) {
    return n.toString(k).split("").reduce((acc, cur) => +acc + +cur) 
};