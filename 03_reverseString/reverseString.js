const reverseString = function(string) {
    forwardString = string.split("");
    let reversedString = "";
    
    for (let i = forwardString.length - 1; i >= 0; i--) {
         reversedString += forwardString[i];
    }
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
