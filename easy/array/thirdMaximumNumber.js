/*
    Given a non-empty array of integers, return the third maximum number in this array.
    If it does not exist, return the maximum number. The time complexity must be in O(n).
    Note: The third maximum here means the third maximum distinct number.
 */
var thirdMax = function(nums) {
    //내림차순 정렬
    nums.sort(function(a, b){return b-a;});
    //maximum은 구별되는 숫자이므로 3, 2, 2, 1 -> 3, 2, 1로 order되야함
    for(var i=nums.length-1; i>=0; i--){
        if(nums[i] == nums[i-1]) nums.splice(i,1);
    }
    //third maximum 없다면 가장 큰 수를 리턴
    if(nums.length<3) return nums[0];
    return nums[2];
    
};