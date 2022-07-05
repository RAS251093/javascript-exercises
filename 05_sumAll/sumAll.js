const sumAll = function(firstNum, secondNum) {
    let finalSum = 0;

    if (!(typeof(firstNum) == "number" && (typeof(secondNum) == "number"))) {
        return "ERROR";
    } else if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    } else if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            finalSum += i;
        }
    } else {
        for (let i = firstNum; i <= secondNum; i++) {
        finalSum += i;
        };
    }

    return finalSum;
};


// Do not edit below this line
module.exports = sumAll;
