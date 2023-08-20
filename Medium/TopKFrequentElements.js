/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const count = new Map();
    for (let num of nums) {
        count.set(num, count.has(num) ? count.get(num) + 1 : 1);
    }
    const sortedCount = [...count]
        .sort((a, b) => b[1] - a[1])
        .map(a => a[0]);
    return sortedCount.splice(0, k);
};

// Test
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));