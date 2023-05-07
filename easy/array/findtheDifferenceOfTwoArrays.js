/**
 * 2215. Find the Difference of Two Arrays
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    ● answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    ● answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
    
    Note that the integers in the lists may be returned in any order.
 * Example 1:
    Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
    Output: [[3],[]]
    Explanation:
    For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
    Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  // 2차원 배열 만들기 [[],[]]
  let answer = new Array(2).fill(0).map((v) => new Array());
  // nums2에 존재하지 않고 answer 값과 중복되지 않은 숫자 체크
  nums1.forEach((el) => {
    if (nums2.indexOf(el) == -1 && answer[0].indexOf(el) == -1)
      answer[0].push(el);
  });

  // nums1에 존재하지 않고 answer 값과 중복되지 않은 숫자 체크
  nums2.forEach((el) => {
    if (nums1.indexOf(el) == -1 && answer[1].indexOf(el) == -1)
      answer[1].push(el);
  });
  return answer;
};

// 다른 사람 풀이
// Set
var findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  for (let item of nums1) {
    if (nums2.has(item)) {
      nums1.delete(item);
      nums2.delete(item);
    }
  }
  return [Array.from(nums1), Array.from(nums2)];
};
