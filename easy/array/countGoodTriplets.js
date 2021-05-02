/*
    Count Good Triplets

    Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
    A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
    -> 세 조건을 만족할 때 카운트 아해의 i<j<k 조건이 키 포인트
    ***  0 <= i < j < k < arr.length
    |arr[i] - arr[j]| <= a
    |arr[j] - arr[k]| <= b
    |arr[i] - arr[k]| <= c
    Where |x| denotes the absolute value of x.

    Return the number of good triplets.

    Example 1:
    Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
    Output: 4
    Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

    Constraints:
    3 <= arr.length <= 100
    0 <= arr[i] <= 1000
    0 <= a, b, c <= 1000
 */
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        
        for(let j = i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) > a) continue;
            
            for(let k = j+1; k < arr.length; k++) {
                if(Math.abs(arr[j] - arr[k]) > b) continue;
                if(Math.abs(arr[k] - arr[i]) <= c) result++; // 세 조건을 다 만족할 때 카운팅
            }
        }
    }
    return result;
};