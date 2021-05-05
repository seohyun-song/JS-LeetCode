/*
    Build an Array With Stack Operations
    Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.
    Build the target array using the following operations:

    Push: Read a new element from the beginning list, and push it in the array.
    Pop: delete the last element of the array.

    If the target array is already built, stop reading more elements.
    Return the operations to build the target array. You are guaranteed that the answer is unique.
    -> list에 1부터 n까지 있을 때 빈 배열에 푸시나 팝을 사용해서 타겟 배열처럼 만들수 있는지 ??

    Example 1:
    Input: target = [1,3], n = 3
    Output: ["Push","Push","Pop","Push"]
    Explanation: 
    Read number 1 and automatically push in the array -> [1]
    Read number 2 and automatically push in the array then Pop it -> [1]
    Read number 3 and automatically push in the array -> [1,3]

    Constraints:
    1 <= target.length <= 100
    1 <= target[i] <= n
    1 <= n <= 100
    target is strictly increasing.
 */

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    var i = 1,
        arr = [];
    
    while(i <= target[target.length -1]) {
        if(target.includes(i)) {
            arr.push('Push');
        } else {
            arr.push('Push', 'Pop');
        }
        i++;
    }
    return arr;
    
};