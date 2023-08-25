/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const isAlphaNumeric = (c) => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    let start = 0;
    let end = s.length - 1;
    let startC;
    let endC;
    while (start <= end) {
        startC = s[start].toLowerCase();
        endC = s[end].toLowerCase();
        if (isAlphaNumeric(startC)) {
            if (isAlphaNumeric(endC)) {
                if (startC !== endC) return false;
                start++;
                end--;
            } else {
                end--;
            }
        } else {
            start++;
        }
    }

    return true;
};

// Test
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));