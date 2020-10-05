/*
    You are given an array nums of non-negative integers. nums is considered special 
    if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
    Notice that x does not have to be an element in nums.
    Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

    input: [3,5]
    output: 2
    nums에 있는 요소들은 x보다 크거나 같고 크거나 같은 조건을 만족하는 nums요소의 갯수가 x와 같아야함.
*/
var specialArray = function(nums) {
    var count=0;
    //x는 nums요소의 갯수와 같아야하므로 큰 값은 loop돌 필요 없음
    for(var i=0; i<=nums.length; i++){
        count = 0;
        for(var j=0; j<nums.length; j++){
            if(nums[j]>=i){count++;}
        }
        if(count==i) return i;
    }
    //special조건을 만족하지 않은 경우 -1 값을 리턴함
    return -1;
};