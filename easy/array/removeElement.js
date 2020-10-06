/*
    Given an array nums and a value val, remove all instance of that value in-place and return the new length.
    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
    The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */
var removeElement = function(nums, val) {
    for(var i=nums.length-1; i>=0;i--) {
        if(nums[i] == val){nums.splice(i,1);}
    }
    //return an integer value
    return nums.length;
};