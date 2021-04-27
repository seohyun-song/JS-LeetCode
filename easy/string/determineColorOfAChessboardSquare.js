/*
    Determine Color of a Chessboard Square
    You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
    Return true if the square is white, and false if the square is black.
    The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.
    -> 주어진 coordinate가 체스의 흰색 판이면 true를 검은색이면 false를 리턴해라

    Example 1:
    Input: coordinates = "a1"
    Output: false
    Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

    Constraints:
    coordinates.length == 2
    'a' <= coordinates[0] <= 'h'
    '1' <= coordinates[1] <= '8'

    ** str.includes() 
 */
/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    let str = coordinates[0],
        num = coordinates[1];
    
    if( str == 'a' || str == 'c' || str == 'e' || str == 'g') {
        return num % 2 == 0 ? true : false;
    } else {
        return num % 2 == 0 ? false : true;
    }
    
};

// 다른 사람 풀이
var squareIsWhite = function(coordinates) {
    return 'aceg'.includes(coordinates[0]) ? coordinates[1] % 2 == 0 : coordinates[1] %2 == 1;
};