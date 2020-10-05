/*
    Given a string, determine if it is a palindrome, considering only alphanumeric and ignoring
    cases.(숫자와 글자만 고려 특수기호는 무시)
    Note: For the purpose of this problem, we define empty string as valid palindrome.
    constraints: s consists only of printable ASCII characters.
 */
var isPalindrome = function(s) {
    //특수문자제거, 공백제거, 소문자변환하여 문자열 반환
    var str = regExp(s).toLowerCase().split(' ').join('');
    var strReverse = str.split('').reverse().join('');
    
    return str == strReverse ? true : false;
    
    //특수문자제거 정규 정규식
    function regExp(str){  
        var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
        //특수문자 검증
        if(reg.test(str)){
        //특수문자 제거후 리턴
        return str.replace(reg, "");    
        } else {
        //특수문자가 없으므로 본래 문자 리턴
        return str;
        }  
    }

};