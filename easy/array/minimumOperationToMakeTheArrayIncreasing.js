/*
    Minimum Operation to Make the Array Increasing
    You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

    For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
    Return the minimum number of operations needed to make nums strictly increasing.
    An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.
    -> 이전 숫자 보다 1씩만 크면 된다.

    Example 1:
    Input: nums = [1,1,1]
    Output: 3
    Explanation: You can do the following operations:
    1) Increment nums[2], so nums becomes [1,1,2].
    2) Increment nums[1], so nums becomes [1,2,2].
    3) Increment nums[2], so nums becomes [1,2,3].
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    if(nums.length == 1) return 0;
    let count = 0;
    
    for(let i = 1; i < nums.length; i++) {
        while(nums[i-1] >= nums[i]) {
            count++;
            nums[i]++;
        }
    }
    return count;
    
};

// 다른 사람 풀이 O(n)
// 시간 복잡도 줄이기!!!
var minOperations = function(nums) {
    let count = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] >= nums[i]) {
            count += (nums[i-1] - nums[i] + 1);
            nums[i] = nums[i-1] + 1;
        }
    }
    return count;
}