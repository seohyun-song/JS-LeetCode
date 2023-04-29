/**
 * 2418. Sort the People
 * You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

    For each index i, names[i] and heights[i] denote the name and height of the ith person.

    Return names sorted in descending order by the people's heights.
 * Example 1:
    Input: names = ["Mary","John","Emma"], heights = [180,165,170]
    Output: ["Mary","Emma","John"]
    Explanation: Mary is the tallest, followed by Emma and John.
 */
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let answer = [];
  // 현재 인덱스 값 가진채로 내림차순 정렬
  let sortHeights = heights
    .map(function (el, i) {
      return { index: i, value: el };
    })
    .sort((a, b) => b.value - a.value);
  for (let i = 0; i < heights.length; i++) {
    answer.push(names[sortHeights[i].index]);
  }
  return answer;
};

// 다른 사람 풀이
// HashMap
var sortPeople = function (names, heights) {
  let track = names
    .map((el, idx) => ({ name: el, height: heights[idx] }))
    .sort((a, b) => b.height - a.height);
  return track.map((el) => el.name);
};
