/*
    Given an array of integers nums and an integer target, return indiced of the two
    numbers such that they add up to target.
 */
var twoSum = function(nums, target) {
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            //주어진 합이 조건과 같을 때 해당 인덱스 값들을 리턴함
            if(nums[i]+nums[j] == target){
                return [i, j];
            }
        }
    }
    
};