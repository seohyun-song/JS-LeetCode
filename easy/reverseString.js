/*  
    Write a function that reverses a string. The input string is given as an array of charaters char[].
    Do not allocate extra space for another array, you must do this by modifying the input array in-place
    with O(1) extra memory.
    You may assume all the charaters consist of printable ascii charaters.

    Two pointers approach
    In this approach, two pointers are used to process two array elements at the same time.
    Usual implementation is to set one pointer in the begining and one at the end and then to move
    them until they both meet.
 */
var reverseString = function(s) {
    // return s.reverse();
    var leftIdx = 0;
    var rightIdx = s.length-1;
   
    while(leftIdx < rightIdx){ 
        //값 재할당후 재사용 하기 위함
        var tmp = s[leftIdx];
        //후위 연산자 활용.move left pointer one step right, and right pointer one step left.
        s[leftIdx++] = s[rightIdx];
        s[rightIdx--]=tmp;
    }
    return s;
};


