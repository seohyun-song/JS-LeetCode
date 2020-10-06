//Given a 32-bit signed integer, reverse digit of an integer
var reverse = function(x) {
    var sign = 0;
    var output = 0;
    //음수인지 양수인지 구분
    if(x<0){
        Math.abs(x);
        sign = -1;
    } else {sign = 1;}
    
    //부호를 제외한 숫자만을 reverse시킨뒤 합침
    output =parseInt((x+'').split('').reverse().join(''));
    
    //integer가 표현 할 수 있는 숫자 범위 내에서 리턴, 넘어서는 값은 0
    return output > Math.pow(2,31) ? 0 : sign*output;
};