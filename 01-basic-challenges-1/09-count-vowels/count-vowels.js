function countVowels(string) {
    const stringArray = Array.from(string.toLowerCase());
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return stringArray.reduce((accumulator, currentValue) => {
        if (vowels.includes(currentValue)) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
}

module.exports = countVowels;
