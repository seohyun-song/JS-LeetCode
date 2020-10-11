/*
    Given an array A of non-negative integers, half of the integers in A are odd,
    and half of the integers are even.
    Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is
    even, i is even.
    You may return any answer array that satisfies this condition.

    Note: 
        1. 2 <= A.length <= 20000
        2. A.length % 2 ==0
        3.0 <= A[i] <= 1000
 */
var sortArrayByParityII = function(A) {
    //A.length길의 빈 배열 생성
    var answer = new Array(A.length);
    
    //A[i] == even answer배열의 짝수번째 인덱스에 값 할당
    var idx = 0;
    for(var i=0; i<A.length; i++){
        if(A[i]%2 == 0){
            answer[idx] = A[i];
            idx += 2;
        }
    }
    //홀수번째 idx위해 idx초기화.
    idx = 1;
    for(var i=0; i<A.length; i++){
        if(A[i]%2 == 1){
            answer[idx] = A[i];
            idx += 2;
        }
    }
    return answer;
    
};