const fibonacci = function(member) {
    let sequenceArray = [];
    let fibonacciArray = [];

    if (member < 0) {
        return "OOPS";
    }

    for (let i = 0; i <= member; i++) {
        sequenceArray.push(i);
    }

    for (let num of sequenceArray) {
        if (num === 0) {
            fibonacciArray.push(0);
        } else if (num <= 2) {
            fibonacciArray.push(1);
        } else {
            fibonacciArray.push((fibonacciArray[num - 1] + fibonacciArray[num - 2]));
        }
    }

    return fibonacciArray[member];

};

// Do not edit below this line
module.exports = fibonacci;
