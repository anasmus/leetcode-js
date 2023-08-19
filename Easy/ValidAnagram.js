/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sCount = {};
    for (let char of s) {
        sCount[char] = sCount[char] ? sCount[char] + 1 : 1;
    }
    console.log(sCount)
    for (let char of t) {
        if (sCount[char]) {
            sCount[char]--;
        }
        else {
            return false;
        }
    }
    for (let char in sCount) {
        if (sCount[char] !== 0) return false;
    }
    return true;
};

// Test
console.log(isAnagram("anagram", "nagaram"));