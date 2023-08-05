/**
 * 2678. Number of Senior Citizens
    You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:
    - The first ten characters consist of the phone number of passengers.
    - The next character denotes the gender of the person.
    - The following two characters are used to indicate the age of the person.
    - The last two characters determine the seat allotted to that person.
    Return the number of passengers who are strictly more than 60 years old.
 * Constraints:
    1 <= details.length <= 100
    details[i].length == 15
    details[i] consists of digits from '0' to '9'.
    details[i][10] is either 'M' or 'F' or 'O'.
    The phone numbers and seat numbers of the passengers are distinct.
 * 
 */

/**
 * @param {string[]} details
 * @return {number}
 */
// slice(beginIndex, endIndex): 문자열의 일부 추출하여 새로운 문자열 반환
// endIndx: 종료 인데스 그 직전까지 추출, endIndx가 -3이면 종료점은 strLength -3
var countSeniors = function (details) {
	return details.filter((person) => Number(person.slice(11, -2)) > 60).length;
};

// 다른 접근
// 문자열 인덱스 접근
var countSeniors = function (details) {
	let result = 0;
	for (let i = 0; i < details.length; i++) {
		const age = Number(details[i][11] + details[i][12]);
		if (age > 60) result++;
	}
	return result;
};
