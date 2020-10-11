/*
    Given two positive integers x and y, an integer is powerful if it is equal to
    x^i+y^j for some integers i>=0 and j>=0.
    Return a list of all powerful integers that have value less than or equal to bound.
    You may return the answer in an order. In your answer, each value should occur at most once.

    Note:
        1. 1 <= x <= 100
        2. 1 <= y <= 100
        3. 0 <= bound <= 10^6
 */
var powerfulIntegers = function(x, y, bound) {
    var set = new Set();
    var result = [];
    /*
        x=1, y=1 -> 1^i+1^j=2이므로 i,j값의 범위가 상관없음
        x=2, 2^i <= 10^6 -> i<20 
     */
    for(var i=0;i<20 && Math.pow(x,i)<=bound;i++){
        for(var j=0;j<20 && Math.pow(y,j)<=bound;j++){
            var powSum = Math.pow(x,i)+Math.pow(y,j);
            if(powSum <= bound) set.add(powSum);
        }
    }
    //셋은 중복을 허용하지 않는 키가 없는 값을 모아 놓은 컬렉션. result배열에 value만 담아 숫자배열을 리턴
    for(var value of set){result.push(value);}
    return result;
};