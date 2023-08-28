/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    let total;
    while (start < end) {
        total = numbers[start] + numbers[end];
        if (total > target) {
            end--;
        } else if (total < target) {
            start++;
        } else {
            return [start + 1, end + 1];
        }
    }
    return [0, 0];
};

// Test
console.log(twoSum([2, 7, 11, 15], 9));