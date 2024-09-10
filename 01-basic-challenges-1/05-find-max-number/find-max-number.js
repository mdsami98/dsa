function findMaxNumber(numbers) {
    const max = numbers.reduce((accumulator, currentValue) => {
        if (currentValue > accumulator) {
            return currentValue;
        }
        return accumulator;
    }, 0);

    return max;
}

module.exports = findMaxNumber;
