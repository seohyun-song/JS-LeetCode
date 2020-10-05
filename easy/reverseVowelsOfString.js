/*
    Write a function that takes a string as input and reverse only the vowels of a string.
    Note: The vowels does not include the letter 'y'.
    
    **string is 'array-like'!!!!
 */
var reverseVowels = function(s) {
    //input을 배열로 만듦
    var str = s.split('');


    var left = 0;
    var right = str.length-1;
    var vowel = 'aeiouAEIOU';
    //two pointers approach
    while(left<right){
        var tmp=str[left];
        //left와 rigth charater가 모음인경우 스왑
        if((vowel.indexOf(str[left]) != -1) && (vowel.indexOf(str[right]) != -1)){
            str[left++]=str[right];
            str[right--]=tmp;
        }
        //right가 모음이 아니면 right--값을 비교해야함
        if(vowel.indexOf(str[right]) == -1){
            right--;
        }
        //left가 모음이 아니면 left++값을 비교해야함
        if(vowel.indexOf(str[left]) == -1){
            left++;
        }
    }
    //배열을 다시 문자열로 변경
    str = str.join('');
    return str;
};