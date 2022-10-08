const palindromes = function (string) {
    const stringArray = Array.from(string);
    const reverseStringArray = stringArray.reverse(); 
    let reverseString = reverseStringArray.join('');
    let removePunctuation = (string) => string.replace(/[\P{L}\s]/gu,"")
    
    string = removePunctuation(string);
    reverseString = removePunctuation(reverseString);

    if (string.toLowerCase() === reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    } 
};

// Do not edit below this line
module.exports = palindromes;

