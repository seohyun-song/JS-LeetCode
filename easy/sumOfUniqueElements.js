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


    .reduce(): 배열의 각 요소에 대해 주어진 리듀서함수를 실행하고 하나의 결과값을 반환함/
    arr.reduce(callback[, initialValue])
    - callback: 배열의 각 요소에 대해 실행할 함수, 다음 네 가지 인수를 받습니다. 
        • accumulator: 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값
        • currentValue: 처리할 현재 요소
    - 반환값: 누적 계산의 결과 값

    // 누산기 
    arr.reduce(funciton(acumulator, currentValue) {
        return accumulator + currentValue;
    })
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