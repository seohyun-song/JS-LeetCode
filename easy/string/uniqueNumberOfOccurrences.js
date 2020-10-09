/*
    Given an array of integers arr, write a function that returns true if and only
    if the number of occurrences of each value in the array is unique.
    No each value has the same number of occurrences!
 */
var uniqueOccurrences = function(arr) {
    var map = new Map();
    var output = [];
    
    for(var i=0; i<arr.length; i++){
        var num = arr[i];
        if(!map.has(num)){
            //you must set to a reference to a value. storing an object not a primitive.
            map.set(num, {val: 1});
        } else {
            //value값을 primitive로 설절하지 않고 object로 reference로 셋함으로써 나중에 값을 ++ 할 수 있게 함
            map.get(num).val++;
        }
    }
    //map.values() 각 요소의 값을 모은 반복 가능한 객체를 반환함
    for (var occurrence of map.values()){
        //map의 value값의 val 값을 배열에 넣음
        output.push(occurrence.val);
    }
    //check the number of occurrences of each value in the array is unique!
    return new Set(output).size == map.size ? true : false;
    
};