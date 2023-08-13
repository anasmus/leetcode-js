/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let substr = '';
    let largestSubstr = '';
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            i = map.get(s[i]) + 1;
            largestSubstr = substr.length > largestSubstr.length ? substr : largestSubstr;
            map.clear();
            substr = '';
        }
        substr += s[i];
        map.set(s[i], i);
    }
    largestSubstr = substr.length > largestSubstr.length ? substr : largestSubstr;
    return largestSubstr.length;
};

// Test
console.log(lengthOfLongestSubstring('dvdf'));