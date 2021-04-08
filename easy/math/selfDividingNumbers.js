/*
    Self Dividing Numbers
    A self-dividing number is a number that is divisible by every digit it contains.
    For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
    Also, a self-dividing number is not allowed to contain the digit zero.
    Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible
    
    Example 1:
    Input: 
    left = 1, right = 22
    Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

    Note:  1 <= left <= right <= 10000

*/
var selfDividingNumbers = function(left, right) {
    var result = [];
    for(var i = left; i <= right; i++) {
        if(i < 10) { 
            result.push(i);
        } else {
            var numArr = (i+'').split('').map(x=> parseInt(x));
            var count = 0;
            for(var j = 0; j < numArr.length; j++) {
            
                if(i%numArr[j] != 0 || numArr[j]==0) {
                    break;
                } else {
                    count++;
                }
                if(count == numArr.length) { result.push(i) }
            }
        }
    }
    return result;
};