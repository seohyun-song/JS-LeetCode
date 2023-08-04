/**
 * 2710. Remove Trailing Zeros From a String
Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.
 * Constraints:
    1 <= num.length <= 1000
    num consists of only digits.
    num doesn't have any leading zeros.
 * 
 */
/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
	if (num[num.length - 1] !== "0") return num;

	let str = "0";
	for (let i = num.length - 2; i >= 0; i--) {
		if (num[i] === "0" && str[str.length - 1] === "0") {
			str += "0";
		} else {
			break;
		}
	}
	return num.slice(0, -str.length);
};

// 다른 풀이
// index 접근
var removeTrailingZeros = function (num) {
	let idx = num.length - 1;
	while (idx) {
		if (num[idx] !== "0") {
			break;
		}
		idx--;
	}
	return num.slice(0, i + 1);
};
