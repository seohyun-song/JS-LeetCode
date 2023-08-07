/**
 * 1941. Check if All Characters Have Equal Number of Occurrences
    Given a string s, return true if s is a good string, or false otherwise.
    A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
/*
    s = "abacbc"
    result = {
        a: 2,
        b: 2,
        c: 2
    }
*/
var areOccurrencesEqual = function (s) {
	const result = {};
	for (const str of s) {
		if (Object.keys(result).includes(str)) {
			result[str] += 1;
		} else {
			result[str] = 1;
		}
	}
	const values = Object.values(result);
	return values.filter((val) => val === values[0]).length === values.length;
};

// 다른 풀이
// Array.prototype.every(): 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트하여 boolean 값 반환
var areOccurrencesEqual = function (s) {
	const result = {};
	for (const str of s) {
		if (Object.keys(result).includes(str)) {
			result[str] += 1;
		} else {
			result[str] = 1;
		}
	}
	const values = Object.values(result);
	return values.every((val) => val === values[0]);
};

/*
     new Set(iterable) 중복을 허용하지 않는 값을 모아 놓은 컬렉션. 셋에 키가 없는 값이 저장됨
     iterable객체를 전달받으면 (대개 배열을 전달 받음)그 안의 값을 복사해 셋에 넣어줌
     set.size:셋에 몇개의 값이 있는지 세줌
     셋은 유일무이함을 확인하는데 최적
*/
var areOccurrencesEqual = function (s) {
	const result = {};
	for (const str of s) {
		Object.keys(result).includes(str)
			? (result[str] += 1)
			: (result[str] = 1);
	}
	return new Set(Object.values(result)).size === 1;
};
