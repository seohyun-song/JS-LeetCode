/*
    You are given a string representing an attendance record for a student.
    The record only contains the following three characters:
        1.'A' : Absent
        2.'L' : Late
        3.'P' : Present
    A student could be rewarded if his attendance record doesn't contain more than one 'A'(absent) or
    more than two continuous 'L'(late).
    You need to return whether the student could be rewarded according to his attendance record.
 */
var checkRecord = function(s) {
    var countA = 0;
    var stackL = [];
    for(var i=0; i<s.length; i++){
        if(s[i] == 'A') countA++;
        if(countA>1) return false;

        if(s[i] == 'L') {
            //연속된 'L'이 2개보다 크면 return false
            stackL.push(s[i]);
            if(stackL.length > 2) return false;
        } else {
            //if not 'L', clear the stackL.
            stackL.length = 0;
        }
        
    }
    return true;
};