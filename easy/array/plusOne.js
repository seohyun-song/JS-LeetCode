/*
    Given a non-empty array of digits representing a non-negative integer, increment one 
    to the integer.
    The digits are stored such that the most significant digit is at the head of the list, and
    each element in the array contains a single digit.
    ** You may assume the integer does not contain any leading zero, except the number 0 itself.
 */
var plusOne = function(digits) {
    for(var i=digits.length-1; i>=0; i--){
        digits[i] = digits[i]+1;
        if(digits[i] <= 9){
            return digits;
        }
        digits[i]=0;
    }
    //integer자체는 자기 자신이 0인 경우 제외하고 앞자리에 0이 오지 않으므로 인덱스0의 값에 0이오면 덧셈에 의한 결과임
    if(digits[0]==0) digits.unshift(1);
    return digits;
    
};