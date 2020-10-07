/*
    Given a non-empty string s, you may delete at most one character.
    Judge whether you can make it a palindrome.

    Note: The string will only contain lowercase characters a-z.
    The maximum length of the string is 50000.
 */
var validPalindrome = function(s) {
    var startIdx = 0;
    var endIdx = s.length-1;
    
    while(startIdx < endIdx){
        if(s[startIdx] == s[endIdx]){
            startIdx++;
            endIdx--;
        } else {
            //startIdx의 문자를 제거한 문자열을 tmp1에 임시저장
            var tmp1 = s.substring(startIdx+1,endIdx+1);
            //endIdx의 문자를 제거한 문자열을 tmp2에 임시저장
            var tmp2 = s.substring(startIdx,endIdx);
            
            //palindrome인지 검사. tmp1 혹은 tmp2의 경우 중 하나라도 참이면 참을 반환
            return tmp1 == tmp1.split('').reverse().join('') || tmp2 == tmp2.split('').reverse().join('');
        }
    }
    
    return true;
};