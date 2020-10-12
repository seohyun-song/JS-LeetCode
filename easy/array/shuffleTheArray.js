/*
    Given the array nums consisting of 2n elements  in the form
    [x1, x2, ...,xn, y1, y2, ... ,yn].
    Return the array in the form [x1, y1, x2, y2,...., xn, yn].

    Constraints:
        ●  1 <= n <= 500
        ●  nums.length == 2n
        ●  1 <= nums[i] <= 10^3     
 */

var shuffle = function(nums, n) {
    var result = new Array(nums.length);
    
    var idx = 0;
    //x1~xn 원소를 result 의 짝수번째 인덱스에 값 할당
    for(var i=0; i<n; i++){
        result[idx] = nums[i];
        idx += 2;
    }
    
    idx = 1;
    //y1~yn 원소를 result 의 홀수번째 인덱스에 값 할당
    for(var i=n; i<2*n; i++){
        result[idx] = nums[i];
        idx += 2;
    }
    return result;
    
};