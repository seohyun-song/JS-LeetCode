/*
    Goal Parser Interpretation

    You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
    Given the string command, return the Goal Parser's interpretation of command.

    Example 1 :
    Input: command = "G()(al)"
    Output: "Goal"
    Explanation: The Goal Parser interprets the command as follows:
    G -> G
    () -> o
    (al) -> al
    The final concatenated result is "Goal".

    Example 2 :
    Input: command = "G()()()()(al)"
    Output: "Gooooal"

    string은 유사배열 객체로서 array length속성을 사용가능하여 인덱스로 문자에 접근이 가능합니다.
   
 */
// 스택을 활용한 풀이
var interpret = function(command) {
    let result = '';
    let stack = [];
    
    for(var i = 0; i < command.length; i++) {
        if(command[i] == 'G') {
            result += 'G';
        } else if(command[i] == '(') {
            stack.push('(');
        } else if( command[i] == ')') {
            stack.pop();
            if(stack.length == 0) {
                result += 'o';
            } else {
                result += 'al'; 
                // 초기화
                stack = [];
            }
        } else {
            stack.push(command[i]);
        }
    }
    return result;
    
};

// 다른 사람 풀이 
// var interpret = function(command) {
//     let str = '';
//     let i = 0;
//     while( i < command.length) {
//         if(command[i] == '(' && command[i+1] == ')') {
//             str += 'o';
//             i += 2;
//         } else if(command[i] == '(' && command[i+1] == 'a') {
//             str += 'al';
//             i += 4;
//         } else {
//             str += 'G';
//             i++;
//         }
//     }
//     return str;
// }