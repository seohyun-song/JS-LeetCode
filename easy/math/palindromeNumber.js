/*
    Determine whether an integer is a palindrome. 
    An integer is a palindrome when it reads the same backward as forward.
 */
var isPalindrome = function(x) {
    //음수인 경우 음의 부호가 맨 뒤로 가므로 무조건 false
    if(x<0) return false;
    
    var reverse = parseInt((x+'').split('').reverse().join(''));
    
    return reverse == x ? true : false;
};