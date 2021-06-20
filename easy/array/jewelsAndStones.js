/*
    Jewels and Stones
    You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
    Each character in stones is a type of stone you have. 
    You want to know how many of the stones you have are also jewels.
    Letters are case sensitive, so "a" is considered a different type of stone from "A".
    -> 각가의 문자들은 원석의 종류를 나타내며 엄격하게 'z'와 'Z'는 다른 종류의 원석이다. 
    내가 가지고 있는 원석의 종류를 카운팅 하라

    Example 1:
    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3
   
    Example 2:
    Input: jewels = "z", stones = "ZZ"
    Output: 0

    Constraints:
    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
 */


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    var count = 0;
    for(var i = 0; i < jewels.length; i++) {
        for(var j = 0; j <  stones.length; j++) {
            if(jewels[i] == stones[j]) count++;
        }
    }
    return count++;
};


// 다른 사람 풀이
var numJewelsStones = function(jewels, stones) {
    const jewelsArr = jewels.split('');

    let count = 0;
    jewelsArr.forEach((jewel) => {
        // match되는 결과가 없을 경우 null 을 반환. null 은 length프로퍼티를 사용할 수 없으므로 []사용
        count += (stones.match(new RegExp(jewel, 'g')) || []).length;
    })
    return count;
}