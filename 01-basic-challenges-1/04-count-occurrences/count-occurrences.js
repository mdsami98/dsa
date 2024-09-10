function countOccurrences(str, char) {
    const stringArray = Array.from(str);
    const count = stringArray.reduce((value, currentValue) => {
        if (currentValue == char) {
            return value + 1;
        }
        return value;
    }, 0);

    return count;
}

module.exports = countOccurrences;
