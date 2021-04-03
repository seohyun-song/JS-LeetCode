/*
    Maximum Number of Balls in a Box
    You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.
    Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
    Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.

    Example 1 : 
    Input: lowLimit = 1, highLimit = 10
    Output: 2
    Explanation:
    Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
    Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
    Box 1 has the most number of balls with 2 balls.

    Constraints:
    1 <= lowLimit <= highLimit <= 105

    ● .fill(): 배열의 시작 인덱스 부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다. 
    arr.fill(val, startIdx, endIdx)
    - startIdx : (default: 0)
    - endIdx : (defualt: this.length)

    ● .map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환 합니다. 
 */
var countBalls = function(lowLimit, highLimit) {
    const arr = new Array(highLimit + 1).fill(0);

    while(lowLimit <= highLimit) {
        var idx = (lowLimit+'').split('').map(x => parseInt(x)).reduce((accumulator, currentValue) => accumulator + currentValue);
        arr[idx-1]++;
        lowLimit++;   
    }
    return Math.max(...arr);
    
};