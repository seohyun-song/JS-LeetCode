/*
    Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
    A subarray is a continuous subsequence of the array.
    Return the sum of all odd-length subarrays of arr.
 */
var sumOddLengthSubarrays = function(arr) {
    var subLen = 1;
    var sum = 0;
    //subarray의 Length가 odd
    while(subLen <= arr.length){
        //subarray의 누적 sum을 구함
        for(var i=0; i<arr.length; i++){
            if(i+subLen > arr.length) break;
            sum += (arr.slice(i, i+subLen)).reduce((a,b) => {return a+b;});
        }
        subLen += 2;
    }
    return sum;
};