/*
    Maximum Product of Two Elements in an Array
    Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

    Example 1:
    Input: nums = [3,4,5,2]
    Output: 12 
    Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
 */
var maxProduct = function(nums) {
    var result = 1;
    var max = 0;

    var i = 0
    for(i; i < 2; i++) {
        max = Math.max(...nums);
        nums.splice(nums.indexOf(max), 1);
        result *= max - 1;
    }
    return result;
};