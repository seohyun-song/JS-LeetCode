/*  
    Given a string s containing just the characters '(', ')', '{', '}', '[', ']',
    determine if input string valid.
    An input string is valid if:
        1.왼쪽 괄호의 개수와 오른쪽 괄호의 개수가 같아야 함
        2.같은 타입의 괄호에서 왼쪽 괄호는 오른쪽 괄호보다 먼저 나와야 한다.
        3.서로 다른 타입의 괄호 쌍이 서로를 교차하면 안된다.
    Algorithm: Stack
        1.문자를 저장하는 스택을 준비함. 처음에는 공백상태가 되어야한다.
        2.입력 문자열을 하나씩 읽어 왼쪽 괄호와 만나면 스택에 삽입
        3.오른쪽 괄호를 만나면 pop()연산으로 가장 최근에 삽입한 괄호를 꺼낸다. 이 때
        스택이  비어 있다면 조건 2에 위배
        4.꺼낸 괄호가 오른쪽 괄호와 짝이 맞이 않아면 조건3에 위반
        5.끝까지 처리했는데 스택이 비어 있지 않으면 조건 1에 위배

 */
var isValid = function(s) {
    var ch =[];
    var prev = '';
    for(var i=0; i<s.length; i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            ch.push(s[i]);
        }
        else if(s[i]==')' || s[i]=='}' || s[i]==']'){
            if(ch.length == 0) return false;
            prev = ch.pop();
            if((s[i]==')' && prev!='(')
               ||(s[i]=='}' && prev!='{')
               ||(s[i]==']' && prev!='[')
            ) return false;
        }
    }
    return ch.length == 0? true:false;
    
};
