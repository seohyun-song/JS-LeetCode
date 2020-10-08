/*
    Given an integer n, add a dot('.') as the thousands seperator and return it in string format.
    Constrains: 0 <= < 2^31
 */
var thousandSeparator = function(n) {
    //1000의 자리수를 세기위한 인덱스
    var idx = 0;
    var str = n.toString();
    var output = '';
    
    if(str.length <= 3) return str;
    
    for(var i=str.length-1; i>=0; i--){
        //1000자리수 마다 .을 찍어줌
        if(idx%3 == 2){
            output += str[i];
            //최고자리 숫자인경우 .을 찍기 않음
            if(idx == str.length-1) break;
            output += '.';
        } else {
            output += str[i];
        }
        idx++;
    }
    return output.split('').reverse().join('');
};