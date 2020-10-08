/*
    Given a string, find the first non-repeating charater in it and return its index.
    If it doesn't exist, return -1.
    Note: You may assume the string contains only lowercase English letters.

    Approach: hash map
    The best possible solution here could be of a linear time because to ensure that the character is unique you have to check the whole string anyway.
    The idea is to go through the string and save in a hash map the number of times each character appears in the string. That would take \mathcal{O}(N)O(N) time, where N is a number of characters in the string.

 */
var firstUniqChar = function(s) {
    var strMap = new Map();
    
    for(var i=0; i<s.length; i++){
        var c = s[i];
        //unique하지 않다면 set value 2로 하면 unique한 값을 찾을 수있음 
        (!strMap.has(c)) ? strMap.set(c,1) : strMap.set(c,2);
    }
    //처음으로 unique한 값이 있다면 해당 인덱스를 반환함
    for(var i=0 ; i<s.length; i++){
        if(strMap.get(s[i]) == 1) return i;
    }
    return -1;
};