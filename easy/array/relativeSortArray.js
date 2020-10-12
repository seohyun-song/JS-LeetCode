/*
    Given two array arr1 and arr2, the elements of arr2 are distinct, and all
    elements in arr2 are also in arr1.

    Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
    Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

    Constraints:
        ● arr1.length, arr2.length <= 1000
        ● 0 <= arr1[i], arr2[i] <=1000
        ● Each arr2[i] is distinct.
        ● Each arr2[i] is in arr1.
*/
var relativeSortArray = function(arr1, arr2) {
    var result = [];
    //arr2의 요소값 기준으로 arr1을 비교함
    for(var i=0; i<arr2.length; i++){
        for(var j=arr1.length; j>=0; j--){
            if(arr2[i] == arr1[j]){
                result.push(arr1[j]);
                //arr2에 나타난 값들을 삭제함
                arr1.splice(j,1);
            }
        }
    }
    //arr2에 나타나지 않는 값들을 오름차순으로 정렬
    arr1.sort(function(a,b){return a-b;});
    return result.concat(arr1);
    
};