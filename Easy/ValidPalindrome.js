/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const sFilter = s.toLowerCase()
        .split('')
        .filter(char => char >= 'a' && char <= 'z' || char >= '0' && char <= '9')
        .join('');
    const sReverse = sFilter.split('').reverse().join('');
    return sFilter === sReverse;
};

// Test
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));