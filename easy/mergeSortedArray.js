/*
    Given two sorted integer array nums1 and nums2, merge num2 into nums1 as one sorted array.
    Note:
        The numeber of elements initialised in nums1 and nums2 are m and n respectively.
        You may assume that nums1 has enouph space (size that is equal to m+n) to hold additional elements from nums2.
    Input:
        nums1 = [1,2,3,0,0,0], m=3
        nums2 = [2,5,6], n=3
    Ouput:
        [1,2,2,3,5,6]
 */
var merge = function(nums1, m, nums2, n) {
    var j=0;
    
    //nums1의 m번 요소부터 m+n-1 인덱스 요소까지 nums2요소로 치환
    for(var i=m; i<m+n; i++){
        nums1[i]=nums2[j];
        j++;
        if(j == n) break;
    }
    //새로운 nums1배열을 오름차순
    nums1.sort(function(a,b){return a-b;});
    
    return nums1;
};