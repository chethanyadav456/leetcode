/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y = reverseNumber(x);
    if (x === y) return true
    else
    return false

};

function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed, 10);
}