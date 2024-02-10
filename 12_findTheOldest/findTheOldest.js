const findTheOldest = function(array) {
    array.sort((a,b) => {
        let firstAge = a.yearOfDeath - a.yearOfBirth;
        let NextAge = b.yearOfDeath - b.yearOfBirth;
        let oldestPerson;
        if(NextAge > oldestPerson){
            oldestPerson = NextAge;
        } 
    });

};

// Do not edit below this line
module.exports = findTheOldest;
