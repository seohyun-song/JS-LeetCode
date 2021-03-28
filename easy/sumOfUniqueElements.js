/*
    Sum of Unique Elements
    You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
    Return the sum of all the unique elements of nums.
    Example 1:
    Input: nums = [1,2,3,2]
    Output: 4
    Explanation: The unique elements are [1,3], and the sum is 4.

    Example 2:
    Input: nums = [1,1,1,1,1]
    Output: 0
    Explanation: There are no unique elements, and the sum is 0.

    Constraints:
    ● 1 <= nums.length <= 100
    ● 1 <= nums[i] <= 100
 */

var sumOfUnique = function(nums) {
    var countArr = [];
    var sum = 0;
    for(var i = 0; i<100; i++) {
        countArr[i] = 0;
    }
    
    for(var i = 0; i < nums.length; i++) {
        var idx = nums[i]-1;
        countArr[idx] += nums[i];
    }
    for(var i = 0; i<100; i++) {
        var idx = nums[i]-1;
        if(countArr[idx]/nums[i] == 1) {
            sum += countArr[idx];
        }
    }
    return sum;
}

// 다른 사람풀이
// var sumOfUnique = function(nums) {
//     return findUniques(nums).reduce((acc, curr) => acc + curr, 0)
// };

// const findUniques = (nums) => {
//   return nums.filter(num => nums.filter(n => n === num).length === 1)
// }