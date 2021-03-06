/*
    Running Sum of 1d Array
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

    Example 1:
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

    누적 합을 이용한 배열 문제
 */
var runningSum = function(nums) {
    var result = [];
    var runningSum = 0;
    for(var i = 0; i < nums.length; i++){
        runningSum += nums[i];
        result.push(runningSum);
    }
    return result;
};