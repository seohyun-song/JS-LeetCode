/*
    Decrypt String from Alphabet to Integer Mapping
    Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

    Characters ('a' to 'i') are represented by ('1' to '9') respectively.
    Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
    Return the string formed after mapping


    It's guaranteed that a unique mapping will always exist.
    -> '0' ~ '9'는 'a' ~ 'i'의 문자를 나타내고, '10#' ~ '26#'은 'j' ~ 'z'의 문자를 나타낸다.

    Example 1:
    Input: s = "10#11#12"
    Output: "jkab"
    Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

    Example 2:
    Input: s = "1326#"
    Output: "acz"

    Constraints:
    1 <= s.length <= 1000
    s[i] only contains digits letters ('0'-'9') and '#' letter.
    s will be valid string such that mapping is always possible.
 */


/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    var result = '';
    var i = s.length-1;
    
    while(i >= 0 ) {
        if(s[i] == '#'){
            switch(s.substring(i-2, i)){
                case '10':
                    result += 'j';
                    break;
                case '11':
                    result += 'k';
                    break;
                case '12':
                    result += 'l';
                    break;
                case '13':
                    result += 'm';
                    break;
                case '14':
                    result += 'n';
                    break;
                case '15':
                    result += 'o';
                    break;
                case '16':
                    result += 'p';
                    break;
                case '17':
                    result += 'q';
                    break;
                case '18':
                    result += 'r';
                    break;
                case '19':
                    result += 's';
                    break;
                case '20':
                    result += 't';
                    break;
                case '21':
                    result += 'u';
                    break;
                case '22':
                    result += 'v';
                    break;
                case '23':
                    result += 'w';
                    break;
                case '24':
                    result += 'x';
                    break;
                case '25':
                    result += 'y';
                    break;
                case '26':
                    result += 'z';
                    break;
            }
            i -= 3;
        } else {
            switch(s[i]){
                case '1':
                    result += 'a';
                    break;
                case '2':
                    result += 'b';
                    break;
                case '3':
                    result += 'c';
                    break;
                case '4':
                    result += 'd';
                    break;
                case '5':
                    result += 'e';
                    break;
                case '6':
                    result += 'f';
                    break;
                case '7':
                    result += 'g';
                    break;
                case '8':
                    result += 'h';
                    break;
                case '9':
                    result += 'i';
                    break;
            }
            i--;
        }
    }
    return result.split('').reverse().join('');
    
};