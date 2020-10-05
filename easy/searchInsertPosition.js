/*
    Given a sorted array and a target value, return the index if the target is found.
    If not, return the index where us would be if it were inserted in order.
 */
var searchInsert = function(nums, target) {
    var idx=0;
    for(var i=0; i<nums.length; i++){
        if(nums[i]<target) {
            idx++;
        } else{break;}
    }
    return idx;
};