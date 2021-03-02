/*
    Richest Customer Wealth
    You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
    A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
    Example 1:
    Input: accounts = [[1,2,3],[3,2,1]]
    Output: 6
    Explanation:
    1st customer has wealth = 1 + 2 + 3 = 6
    2nd customer has wealth = 3 + 2 + 1 = 6
    Both customers are considered the richest with a wealth of 6 each, so return 6.

    Spread operator(전개 구문): 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수(함수로 호출할 경우)
    또는 요소(배열 리터럴 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체를 확장 시킬 수 있음
    아래의 예제의 경우
    console.log(...wealthArr); //wealthArr의 요소들이 나열됨
    */
var maximumWealth = function(accounts) {
    var wealthArr = [];
    var sum = 0;
    for(var i = 0; i < accounts.length; i++){
        for(var j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
        }
        wealthArr.push(sum);
        sum = 0;
    }
    // ...(spread operator)
    return Math.max(...wealthArr);
    
};