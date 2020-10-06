/*
    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string ''.
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';

    var prefix = strs[0];
    //Horizontal Scanning
    for(var i=1; i<strs.length; i++){
        //주어진 값과 일치하는 첫 번째 인덱스 반환. 일치하는 값이 없으면 -1반환. prefix와 일치하면 다음 값과 비교
        while(strs[i].indexOf(prefix) != 0){
            //문자열의 마지막 문자를 잘라냄
            //str.substring(indexStart, indexEnd) 시작인덱스부터 마지막 인덱스 전까지 부분 문자열을 반환
            prefix = prefix.substring(0, prefix.length-1);
            if(prefix == '') return '';
        }
    }
    return prefix;
};
/*내가 푼 답
    var longestCommonPrefix = function(strs) {
        if(strs.length == 0) return '';
        var count = 0;
        var str = '';
        
        strs.sort(function(a,b){return a.length - b.length;});
        
        for(var i=0; i<strs[0].length; i++){
            count =0;
            for(var j=1; j<strs.length; j++){
                if(strs[0][i] == strs[j][i]){
                    count++;
                } else {break;}
            }
            if(count == strs.length-1){
                str += strs[0][i];
            }else {break;}
        }
        return str;
    };
*/