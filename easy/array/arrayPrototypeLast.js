/**
 * Array Prototype Last
 * 
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
    You may assume the array is the output of JSON.parse.
 * Constraints: 
    0 <= arr.length <= 1000
 * Example 1: 
    Input: nums = [null, {}, 3]
    Output: 3
    Explanation: Calling nums.last() should return the last element: 3.

 * Inside the Array.prototype.last function body, you have access to the "this" keyword. "this" is equal to the contents of the array in this case.
 * You can access elements in the array via this[0], this[1], etc. You can also access properties and method like this.length, this.forEach, etc.
 */
Array.prototype.last = function () {
	return this.length ? this.pop() : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
