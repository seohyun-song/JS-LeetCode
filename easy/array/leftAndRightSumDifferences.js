/**
 * 2574. Left and Right Sum Differences
 * Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

    answer.length == nums.length.
    answer[i] = |leftSum[i] - rightSum[i]|.
    Where:

    leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
    rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
    Return the array answer.
 * Example 1: 
    Input: nums = [10,4,8,3]
    Output: [15,1,11,22]
    Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
    The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  let leftSum = [];
  let rightSum = [];
  let answer = [];
  let sum = 0;
  // leftSum array
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      leftSum.push(0);
      continue;
    }
    sum += nums[i - 1];
    leftSum.push(sum);
  }

  // reset value
  sum = 0;
  // rightSum Array
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      rightSum.push(0);
      continue;
    }
    sum += nums[i + 1];
    rightSum.unshift(sum);
  }

  // answer array
  for (let i = 0; i < nums.length; i++) {
    answer.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return answer;
};

// 다른 사람 풀이
var leftRightDifference = function (nums) {
  let result = [];

  let left = 0;
  let right = nums.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    result.push(Math.abs(left - right));
    left += nums[i];
  }
  // left [0, 0+nums[0], 0+nums[0]+nums[1], 0+nums[0]+nums[1]+nums[2]]
  // right [sum-nums[0], sum-nums[0]-nums[1], sum-nums[0]-nums[1]-nums[2], sum-nums[0]-nums[1]-nums[2]-nums[3]]
  return result;
};
