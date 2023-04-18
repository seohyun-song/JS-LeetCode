/**
 * 2634. Filter Elements from Array
 * Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

    The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

    Please solve it without the built-in Array.filter method.

    Example 1:
    Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
    Output: [20,30]
    Explanation:
    const newArray = filter(arr, fn); // [20, 30]
    The function filters out values that are not greater than 10                                        
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let newArray = [];
  arr.forEach(function (value, index) {
    if (fn(value, index)) newArray.push(value); // 조건문이 참인 원소만 새로운 배열에 추가함
  });
  return newArray;
};
