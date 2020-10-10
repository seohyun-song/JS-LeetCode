/*
    International Morse Code defines a standard encoding where each letter is mapped
    to a series of dots and dashes, as follows: 'a' maps to '.-', 'b' maps to '-...' , and so on.
    For convinience, the full table for the 26 letters of the English alphabet is given bellow:
    [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    Now, given a list words, each word can be written as a concatencation of the
    Morse code of each letter. For example, 'cab' can be written as '-.-..--...',(which is the concatenation '-.-'+'.-'+'-...'). We'll call such a concatenation,
    the transformation of a word.

    Return the number od different transformation among all words we have.

    Note:
        -The length of words will be at most 100.
        -Each words[i] will have length in range [1,12]
        -words[i] will only consist of lowercase letters.
 */

var uniqueMorseRepresentations = function(words) {
    var morseCode = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..'
    }
    
    
    for(var i=0; i<words.length; i++){
        words[i]=convertToMorse(words[i]);
    }
    /*
        new Set(iterable) 중복을 허용하지 않는 값을 모아 놓은 컬렉션. 셋에 키가 없는 값이 저장됨
        iterable객체를 전달받으면 (대개 배열을 전달 받음)그 안의 값을 복사해 셋에 넣어줌
        set.size:셋에 몇개의 값이 있는지 세줌
        셋은 유일무이함을 확인하는데 최적
    */
    return new Set(words).size;
    //해당 character에 해당하는 키값이 있으면 모스부호로 반환함
    function convertToMorse(str) {
        return str.split('').map(v => morseCode[v] ? morseCode[v] : v).join('');
    }
};