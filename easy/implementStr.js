/*
    return the index of the first occurrence of needle in haystack, 
    or -1 if needle is not part of haystack.
    What should we return when needle is an empty string?
    for the purpose of this problem, we will return 0 when needle is an empty string.
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};