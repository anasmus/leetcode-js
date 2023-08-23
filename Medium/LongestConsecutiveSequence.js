/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b);
    const numSet = new Set(nums);
    let length = 0;
    let maxLength = 0;
    let lastNum = -Infinity;
    for (let num of numSet) {
        if (num - lastNum !== 1) {
            maxLength = (length > maxLength) ? length : maxLength;
            length = 1;
        } else {
            length++;
        }
        lastNum = num;
    }
    maxLength = (length > maxLength) ? length : maxLength;

    return maxLength;
};

// Test
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 2, 0, 1]));