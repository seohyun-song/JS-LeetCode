/*
    Goal Parser Interpretation
     * 스택을 활용한 문자열 문제
    
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

   
 */

var interpret = function(command) {
    let cmdArr = command.split('');
    let result = '';
    let stack = [];
    
    for(var i = 0; i < cmdArr.length; i++) {
        if(cmdArr[i] == 'G') {
            result += 'G';
        } else if(cmdArr[i] == '(') {
            stack.push('(');
        } else if( cmdArr[i] == ')') {
            stack.pop();
            if(stack.length == 0) {
                result += 'o';
            } else {
                result += 'al'; 
                // 초기화
                stack = [];
            }
        } else {
            stack.push(cmdArr[i]);
        }
    }
    return result;
    
};