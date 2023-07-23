/**
 * 2697. Lexicographically Smallest Palindrome
    * You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.
    Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.
    A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
    Return the resulting palindrome string.
 * Constraints: 
    - 1 <= s.length <= 1000
    - s consists of only lowercase English letters.
 * 
 * We can make any string a palindrome, by simply making any character at index i equal to the character at index length - i - 1 (using 0-based indexing).
 * To make it lexicographically smallest we can change the character with maximum ASCII value to the one with minimum ASCII value.
 */
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
	const str = s.split("");
	const length = str.length;
	// 가운데 기준으로 거울 모드 되는 문자끼리 같게함
	// 사전적으로 가장 작은 문자열을 만들기 위해 아스키코드 비교하여 작은 값으로 변경
	for (let i = 0; i < Math.floor(length / 2); i++) {
		if (str[i] < str[length - i - 1]) {
			str[length - i - 1] = str[i];
		} else if (str[i] > str[length - i - 1]) {
			str[i] = str[length - i - 1];
		}
	}
	return str.join("");
};

// String.charCodeAt() 사용하여 문제 풀어보기
