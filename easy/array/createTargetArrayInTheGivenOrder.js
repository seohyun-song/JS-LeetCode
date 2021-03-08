/*
    Create Target Array in The Given Order
    Given two arrays of integers nums and index. Your task is to create target array under the following rules:

    ● Initially target array is empty.
    ● From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    ● Repeat the previous step until there are no elements to read in nums and index.
    Return the target array.

    It is guaranteed that the insertion operations will be valid.
    
    Example 1 :
    Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
    Output: [0,4,1,3,2]
    Explanation:
    nums       index     target
    0            0        [0]
    1            1        [0,1]
    2            2        [0,1,2]
    3            2        [0,1,3,2]
    4            1        [0,4,1,3,2]

    array.splice(index, howmany, item1, ..., itemX);
    - index: *필수 항목을 추가/제거할 위치를 지정하는 정수, 음수로 지정할 경우 배열 끝에서의 위치를
    지정합니다. 
    - howmany: *선택 제거할 항목의 수. 0으로 설정하면 항목이 제거되지 않습니다.
    - items: *선택 배열에 추가될 항목들

*/
var createTargetArray = function(nums, index) {
    var target = [];
    for(var i = 0; i < nums.length; i++){
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};