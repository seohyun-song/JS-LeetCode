/*
    Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length
    Do not aollocate extra space for another array, you must do this by modifying
    the input array in-place width O(1) extra memory
*/
var removeDuplicates = function(nums) {
    for(var i=nums.length-1; i>=0; i--){
        if(nums[i-1] == nums[i]) nums.splice(i,1);
    }
    return nums.length;
    
};