/*
    Given a roman numeral, convert it to an integer.
 */
var romanToInt = function(s) {
    var sum = 0;
    //객체를 생성하여 키값에 해당하는 값을 할당하여 사용함
    var roman = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    var exception = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    
    for(var i=0; i<s.length;){
        var strException = s[i] + s[i+1];
        //식별자가 아닌 문자를 키로 접근할 때는 무조건 대괄호를 사용해야 객체의 요소에 접근할 수 있음
        if(exception[strException]){
            sum += exception[strException];
            i+= 2;
        }else {
            sum += roman[s[i]];
            i++;
        }
    }
    return sum;
};