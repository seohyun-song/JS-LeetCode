/*
    Replace All Digits with Characters
    You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

    There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
    
    For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
    For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
    
    Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

    Example 1:
    Input: s = "a1c1e1"
    Output: "abcdef"
    Explanation: The digits are replaced as follows:
    - s[1] -> shift('a',1) = 'b'
    - s[3] -> shift('c',1) = 'd'
    - s[5] -> shift('e',1) = 'f'

    Example 2:
    Input: s = "a1b2c3d4e"
    Output: "abbdcfdhe"
    Explanation: The digits are replaced as follows:
    - s[1] -> shift('a',1) = 'b'
    - s[3] -> shift('b',2) = 'd'
    - s[5] -> shift('c',3) = 'f'
    - s[7] -> shift('d',4) = 'h'

    Constraints:
    1 <= s.length <= 100
    s consists only of lowercase English letters and digits.
    shift(s[i-1], s[i]) <= 'z' for all odd indices i.

    ● "string".charCodeAt([문자열 자릿수]): 문자열을 아스키 코드로 변환
    ● String.fromCharCode([아스키코드 값]): 아스키코드를 문자열로 변환
    ● isNaN(): NaN을 구별하는 메소드. NaN이면 true를 반환, NaN이 아니면 false를 반환
    ● arr.map(callback(currentValue[, index[, array]]))
    배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다. 
    - callback: 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가질 수 있습니다. 
    - currentValue: 처리한 현재 요소
    - index *optional: 처리한 현재 요소의 인덱스
    - array *optional: map()을 호출할 배열    
 */
/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    var result = '',
        i = 0;
    while(i < s.length) {
        result += s[i]; 
        if(i%2 == 0 && i == s.length-1) {
            
        } else {
            result += String.fromCharCode(s[i].charCodeAt() + Number(s[i+1]));
        }
        i += 2;
    }
    return result;
};

// 다른 사람 풀이
var replaceDigits = function(s) {
    return s.split('').map((w,i) => {
        if(isNaN(w)) return w
        else return String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(w));
    }).join('')
}