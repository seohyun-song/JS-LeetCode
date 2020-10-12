/*
    Given an integer array arr, return true if there are three consecutive odd numbers in the array.
    Otherwise, return false.

    Constraints:
        1. 1 <= arr.length <= 1000
        2. 1 <= arr[i] <= 1000
 */
var threeConsecutiveOdds = function(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++){
        //홀수인 경우 count++ 아니면 count=0 리셋
        (arr[i]%2 == 1) ? count++ : count=0;
        if(count == 3) return true;
    }
    return false;
};