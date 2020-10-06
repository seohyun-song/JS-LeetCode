/**
    Given an array nums, write a function to move all 0's to the end of it while maintaining the ralative
    order of the non-zero elements.

    Note:
        1.You must do this in-place without making a copy of the array.
        2.minimize the total number of operation.
 */


var moveZeroes = function(nums) {
    var idx = 0;
    //0의 개수를 센다
    var count = 0;

    while(nums.indexOf(0) != -1){
        //해당 idx의 값이 0이면 삭제하고 0의 개수를 센다. 아니면 다음 인덱스의 값을 비교
        if(nums[idx]==0){
            nums.splice(idx,1);
            count++;
        } else{idx++;}
        
    }
    //0의 개수 만큼 nums배열의 뒤에 0값을 추가
    for(var i=0; i<count; i++){nums.push(0);}
    return nums;


    /* 위와 같은 알고리즘을 정리한 코드
        for(var i=nums.length-1; i>=0; i--){
            if(nums[i] == 0){
                nums.splice(i,1);
                nums.push(0);
            }
        }
        return nums;
    */
};