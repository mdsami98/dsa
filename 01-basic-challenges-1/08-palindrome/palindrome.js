function isPalindrome(string) {
    const plainString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse = '';
    for (let i = plainString.length - 1; i >= 0; i--) {
        reverse += plainString[i];
    }

    return plainString == reverse;
}

module.exports = isPalindrome;
