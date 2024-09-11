function arrayIntersection(array1, array2) {
    const finalArray = new Set();
    for (const arrayOneItem of array1) {
        if (array2.includes(arrayOneItem)) {
            finalArray.add(arrayOneItem);
        }
    }

    return [...finalArray];
}

module.exports = arrayIntersection;
