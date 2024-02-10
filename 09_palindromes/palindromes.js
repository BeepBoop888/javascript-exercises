const palindromes = function (input) {

    const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');//This is a negated character class. By adding a caret ^ at the beginning, it negates the class, matching any character that is not listed inside the brackets.
    const reversedCleanedInput = Array.from(cleanedInput).reverse().join('');

    return cleanedInput === reversedCleanedInput;
};

// Do not edit below this line
module.exports = palindromes;
