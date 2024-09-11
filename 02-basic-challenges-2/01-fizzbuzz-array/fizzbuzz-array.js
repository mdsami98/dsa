function fizzBuzzArray(number) {
    const numbers = [];
    for (let i = 1; i <= number; i++) {
        let text = '';

        if (i % 3 == 0) {
            text += 'Fizz';
        }
        if (i % 5 == 0) {
            text += 'Buzz';
        }

        if (text == '') {
            numbers.push(i);
        } else {
            numbers.push(text);
        }
    }

    return numbers;
}

module.exports = fizzBuzzArray;
