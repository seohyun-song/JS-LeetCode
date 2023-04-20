/**
 * 2194. Cells in a Range on an Excel Sheet
 * A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

    ● <col> denotes the column number c of the cell. It is represented by alphabetical letters.
        - For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
    ● <row> is the row number r of the cell. The rth row is represented by the integer r.
    
    You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

    Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

 * str.charCodeAt() : 문자를 아스키코드로 변환
    String.fromCharCode(code) : 아스키코드를 문자로 변환
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let result = [];
  const colRange = [s[0].charCodeAt(), s[3].charCodeAt()];
  const rowRange = [s[1], s[4]];
  console.log(colRange);
  for (let i = colRange[0]; i <= colRange[1]; i++) {
    for (let j = rowRange[0]; j <= rowRange[1]; j++) {
      let str = "";
      str += String.fromCharCode(i);
      str += j;
      result.push(str);
    }
  }
  return result;
};
