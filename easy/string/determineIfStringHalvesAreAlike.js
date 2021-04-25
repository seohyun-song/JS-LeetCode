/*
    Determine If String Halves Are Alike
    You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
    Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
    Return true if a and b are alike. Otherwise, return false.

    Example 1: 
    Input: s = "book"
    Output: true
    Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

    Constraints:
    ∙ 2 <= s.length <= 1000
    ∙ a.length is even
    ∙ s consists of uppercase and lowercase letters

    정규표현식을 활용한 풀이
 */
var halvesAreAlike = function(s) {
    let strLen = s.length;
    let count1 = 0,
        count2 = 0;
    
    let firstStr = s.substring(0, strLen/2).toLowerCase();
    let secondStr = s.substring(strLen/2).toLowerCase();
    for(var i = 0; i < strLen/2 ; i++){
        if(firstStr[i].match(/[aeiou]/ig)) count1++;
        if(secondStr[i].match(/[aeiou]/ig)) count2++;
    }
    return count1 == count2 ? true : false;
};