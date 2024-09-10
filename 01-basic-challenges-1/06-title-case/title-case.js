function titleCase(string) {
    const stringArray = string.toLowerCase().split(' ');

    const finalArray = stringArray.map((item) => {
        return item[0].toUpperCase() + item.slice(1);
    });

    return finalArray.join(' ');
}

module.exports = titleCase;
