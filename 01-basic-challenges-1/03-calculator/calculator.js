function calculator(num1, num2, operator) {
    const operatorOptions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b
    };

    const calCulation = operatorOptions[operator];
    if (calCulation) {
        return calCulation(num1, num2);
    }
    return 0;
}

module.exports = calculator;
