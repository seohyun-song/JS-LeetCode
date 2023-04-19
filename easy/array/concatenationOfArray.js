/**
 * 1929. Concatenation of Array
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
    Specifically, ans is the concatenation of two nums arrays.
    Return the array ans.
 * Example 1:
    Input: nums = [1,2,1]
    Output: [1,2,1,1,2,1]
    Explanation: The array ans is formed as follows:
    - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
    - ans = [1,2,1,1,2,1]

 * arr.concat(value1, value2, ...)
    - value: 배열 또는 값
    - 인자 생략하면 기존 배열의 얕은 복사본 반환
    - 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return nums.concat(nums);
};
