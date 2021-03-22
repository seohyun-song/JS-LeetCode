/*
    Find N Unique Integers Sum up to Zero
    Given an integer n, return any array containing n unique integers such that they add up to 0.
    Example 1:
    Input: n = 3
    Output: [-1,0,1]

    Example 2:
    Input: n = 1
    Output: [0]
    1 <= n <= 1000
 */
var sumZero = function(n) {
    var arr = [];
    if(n == 1) return [0];
    for(var i = 1; i <= n/2; i++) {
        arr.push(-i);
        arr.push(i);
    }
    if( n%2 == 1 ) arr.push(0);
    return arr;
};