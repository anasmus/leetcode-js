/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groups = [];
    const map = new Map();
    for (let str of strs) {
        const mValue = mapValue(str);
        if (map.has(mValue)) {
            groups[map.get(mValue)].push(str);
        } else {
            map.set(mValue, groups.length);
            groups.push([str]);
        }
    }
    return groups;
};

/**
 * @param {string} s
 * @return {string}
 */
var mapValue = function (s) {
    return s
        .split('')
        .sort()
        .join('');
};

// Test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));