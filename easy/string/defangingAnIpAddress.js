/*
    Defanging an IP Address
    Given a valid (IPv4) IP address, return a defanged version of that IP address.
    A defanged IP address replaces every period "." with "[.]".

    Example 1:
    Input: address = "1.1.1.1"
    Output: "1[.]1[.]1[.]1"
 */

var defangIPaddr = function(address) {
    var addressArr = address.split('.');
    var result = [];
    for(var i = 0; i < addressArr.length; i++) {
        if(i == addressArr.length - 1) {
            result.push(addressArr[i]);
        } else {
            result.push(addressArr[i], '[.]');
        }
    }
    return result.join('');
    
};