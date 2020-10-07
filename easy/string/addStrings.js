/*
    Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
    Note:
        1. The length of both num1 and num2 is <5100.
        2.Both num1 and num2 contains only digits 0-9.
        3.Both num1 and num2 does not contain any leading zero.
        **4.You must not use any built-in BigInteger library or convert the inputs to integers directly.

    Solution: Elementary Math
    Here we have two strings as input and asked not to convert them to integers.
    Digit-by-digit addition is the only option here!

 */
var addStrings = function(num1, num2) {
    var p1 = num1.length-1;
    var p2 = num2.length-1;
    var carry = 0;
    var rest = [];
    
    while(p1>=0 || p2>=0){
        //set x1 to be equal to a digit from string num1[p1]. If p1 has reached the begining of num1, set x1 to 0.
        var x1 = p1>=0 ? parseInt(num1[p1]) : 0;
        var x2 = p2>=0 ? parseInt(num2[p2]) : 0;
        var value = x1+x2+carry;
        carry = parseInt(value/10);
        rest.unshift(value%10);
        p1--;
        p2--;
    }
    //carry=1, rest=00 -> return 100!
    if(carry != 0) rest.unshift(1);
    
    return rest.join('');
};