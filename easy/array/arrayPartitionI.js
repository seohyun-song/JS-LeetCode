/*
    Array Partition I
    Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
    -> 2n 쌍으로 구성된 배열의 각 쌍에서의 최소값들의 합이 최대값이 되는 합의 최대값을 리턴하라. 
    Example 1:
    Input: nums = [1,4,3,2]
    Output: 4
    Explanation: All possible pairings (ignoring the ordering of elements) are:
    1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
    2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
    3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
    So the maximum possible sum is 4.

    Constraints:
    1 <= n <= 104
    -104 <= nums[i] <= 104
    nums.length == 2 * n
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var result = 0;
    nums.sort(function(a, b) { return a-b; }); // 정렬
    
    for(var i = 0; i < nums.length; i+=2) {
        result += nums[i];
    }
    return result;
};
