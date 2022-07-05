const removeFromArray = function(input, ...popThis) {
    let inputArray = [...input];

    for (const num of popThis) {
        let popPosition = inputArray.indexOf(num);

        if (popPosition < 0) {
            continue;
        }

        let removedFromInput = inputArray.splice(popPosition, 1);
    }
    
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
