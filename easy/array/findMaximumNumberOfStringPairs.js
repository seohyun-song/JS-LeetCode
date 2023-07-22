/**
 * 2744. Find Maximum Number of String Pairs
 * You are given a 0-indexed array words consisting of distinct strings.
    The string words[i] can be paired with the string words[j] if:
    The string words[i] is equal to the reversed string of words[j].
    0 <= i < j < words.length.
    Return the maximum number of pairs that can be formed from the array words.
    Note that each string can belong in at most one pair.
 * Constraints:
    - 1 <= words.length <= 50
    - words[i].length == 2
    - words consists of distinct strings.
    - words[i] contains only lowercase English letters.
 * 
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
	// 문자열 알파벳순으로 변경
	words = words.map((word) => [...word].sort().join(""));
	let result = 0;
	for (let i = 0; i < words.length; i++) {
		// 현재 문자열 인덱스 이후에 같은 문자열이 있으면 카운팅함
		if (words.indexOf(words[i], i + 1) !== -1) result++;
	}
	return result;
};
