/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const shortestWord = strs[0];
    for (let i = shortestWord.length; i > 0; i--) {
        const prefix = shortestWord.slice(0, i);
        if (strs.every(word => word.startsWith(prefix))) return prefix;
    }
    return "";
};

// Test
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));