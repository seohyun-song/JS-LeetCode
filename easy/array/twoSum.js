/*
    Given an array of integers nums and an integer target, return indiced of the two
    numbers such that they add up to target.
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      //주어진 합이 조건과 같을 때 해당 인덱스 값들을 리턴함
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// 다른 풀이
// two pointer
// sorted array
var twoSum = function (nums, target) {
  const numsWithIndices = nums.map(function (el, i) {
    return { num: el, idx: i };
  });
  // sorted array여야함
  numsWithIndices.sort((a, b) => a.num - b.num);
  // 왼쪽 포인터
  let i = 0;
  // 오른쪽 포인터
  let j = nums.length - 1;

  // 두 포인터가 만날때 까지 반복
  while (i < j) {
    let sum = numsWithIndices[i].num + numsWithIndices[j].num;
    if (sum == target) {
      return [numsWithIndices[i].idx, numsWithIndices[j].idx];
    } else if (sum < target) {
      // 두 수의 합이 target보다 작으면 i포인터 오른쪽으로 이동
      i++;
    } else {
      // 두 수의 합이 target보다 크면 j포인터 왼쪽으로 이동
      j--;
    }
  }
  return null;
};
