/*
    Compute and return the square root of x, where x is guaranteed to be non-negative integer.
    Since the return type is an integer, the decimal digits are truncated and only the integer
    part of the result is returnded.
    The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 */
var mySqrt = function(x) {
    return parseInt(Math.sqrt(x));
};