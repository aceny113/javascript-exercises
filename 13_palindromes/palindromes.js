const palindromes = function (string) {
    //create variable contains all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string 
        .toLowerCase()
        .split('')
        .filter(character => alphanumerical.includes(character))
        .join('');

        const reversedString = cleanedString.split('').reverse().join('');
return cleanedString === reversedString;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
