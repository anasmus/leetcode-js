/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (seen.has(diff)) {
            return [seen.get(diff), i];
        }
        seen.set(nums[i], i);
    }
    return null;
};

// Test
console.log(twoSum([1, 2, 3], 4));