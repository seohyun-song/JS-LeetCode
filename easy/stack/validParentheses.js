/**
 * 20. Valid Parentheses 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 * Example 1:
    Input: s = "(]"
    Output: false

 * Object.keys(obj): 객체의 키만 담은 배열을 반환
    Object.values(obj): 객체의 값만 담은 배열을 반환

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of s) {
    if (Object.keys(brackets).indexOf(char) != -1) {
      // open brackets
      stack.push(char);
    } else if (Object.values(brackets).indexOf(char) != -1) {
      // close brackets
      if (stack.length == 0) {
        // 닫는 태그가 먼저 올 수 없음
        return false;
      } else if (char != brackets[stack[stack.length - 1]]) {
        // 짝이 안맞을 경우
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length == 0 ? true : false;
};
