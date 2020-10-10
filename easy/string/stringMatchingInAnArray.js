/*
    Given an array of string words. Return all srings in words which is substring of another words in any order.
    String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

    Constrainsts:
        1. 1<= words.length <=100
        2.1<=words[i].length <=30
        3.words[i] contains only lowercase English letters.
        4.It's guaranteed that words[i] will be unique.
 */
var stringMatching = function(words) {
    var output = [];
    //words[i].length를 기준으로 오름차순 정렬
    words.sort(function(a,b){return a.length-b.length;});
    for(var i=words.length-1; i>=0; i--){
        for(var j=i-1; j>=0; j--){
            //이미 words[j]가 substring of another word이면 continue
            if(output.includes(words[j])) continue;
            if(words[i].includes(words[j])) output.push(words[j]);
        }
    }
    return output;
};