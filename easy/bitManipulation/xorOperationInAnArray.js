/*
    Given an integer n and an integer start.
    Define an array nums where nums[i] = start + 2*i (O-indexed) and n == nums.length.
    Return the bitwise XOR of all elements of nums.

    비트연산(bitwise operation) 한 개 혹은 두 개의 이진수에 대해 비트단위로 적용되는 연산
    XOR: 두 값의 각 자릿수를 비교해 값이 0으로 같으면 0, 값이 1로 같으면 0, 다르면 1을 계산
 */
var xorOperation = function(n, start) {
    var nums = [];
    for(var i=0; i<n; i++){
        nums[i] = start +2*i;
    }
    //누적 초기 값이 nums[0]이어야 함
    var result = nums[0];
    for(var i=1; i<n; i++){
        result ^= nums[i];
    }
    return result;
};