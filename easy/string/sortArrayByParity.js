/*
    Given an array A of non-negative integers, return an array consisting of all the even elements of A,
    followed by all the odd elements of A.
    You may return any answer array that satisfies this conditon.

    Note:
        1. 1<= A.length <= 5000
        2. 0 <= A[i] <= 5000
 */
var sortArrayByParity = function(A) {
    var output = [];
    //덱의 활용
    for(var i=0; i<A.length; i++){
        //even값은 앞에서 push, odd값은 뒤에서 push함
        (A[i]%2 == 0) ? output.unshift(A[i]) : output.push(A[i]);
    }
    return output;
    
};