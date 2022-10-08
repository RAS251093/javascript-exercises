const findTheOldest = function(people) {
    return people.reduce((first, second) => {
         const ageFirst = checkAge(first.yearOfBirth, first.yearOfDeath);
         const ageSecond = checkAge(second.yearOfBirth, second.yearOfDeath);
         return ageFirst > ageSecond ? first: second;
    })

    function checkAge(birthYear, deathYear) {
        if (!deathYear) {
            return new Date().getFullYear() - birthYear;
        } else {
            return deathYear - birthYear;
        }     
    }
};

// Do not edit below this line
module.exports = findTheOldest;
