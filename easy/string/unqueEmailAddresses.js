/*
    Every email consists of a local name and a domain name, seperated by the @ sign.
    For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.
    Besides lowercase letters, these emails may contain '.'s or '+'s.
    If you add period('.')between some characters in the local name part of an email address,
    mail sent there will be forwarded to the same address without dots in the local name.
    alice.z@leetcode.com -> alicez@leetcode.com

    If you add a plus('+') in the local name, everything after the first plus sign will be ignored.
    this allows certain emails to be filtered.
    m.y+name@email.com -> my@email.com

    It is possible to use both of these rules at the same time.

    Given a list of emails, we send one email to each address in the list,
    How many different addresses actually receive mails?
 */
var numUniqueEmails = function(emails) {
    var idx = 0;
    var localName = [];
    var domainName = '';
    for(var i=0; i<emails.length; i++){
        idx = emails[i].indexOf('@');
        //@이전의 문자열, localName
        localName = emails[i].substring(0,idx).split('');
        //@을 포함한 이후의 문자열, domainName임시저장
        domainName = emails[i].substring(idx);

        //조건에 맞게 localName값을 변경
        for(var j=localName.length-1; j>=0; j--){
            if(localName[j] == '.') {localName.splice(j,1);}
            if(localName[j] == '+') {localName.splice(j);}
        }
        //email address 재할당
        emails[i]=localName.join('')+domainName;
    }
    //get a number of unique email addresses
    return new Set(emails).size;
};