/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const incrementer = (index, increment) => {
        let diff = increment;
        while (sortedNums[index] === sortedNums[index + diff]) {
            diff += increment;
        }
        return diff;
    }
    const triplets = [];
    let second, last, sum;
    for (let first = 0; first < sortedNums.length - 2; first += incrementer(first, 1)) {
        second = first + 1;
        last = nums.length - 1;
        while (last > second) {
            sum = sortedNums[first] + sortedNums[second] + sortedNums[last];
            if (sum === 0) {
                triplets.push([sortedNums[first], sortedNums[second], sortedNums[last]]);
                second += incrementer(second, 1);
                last += incrementer(last, -1);
            } else if (sum < 0) {
                second += incrementer(second, 1);
            } else if (sum > 0) {
                last += incrementer(last, -1);
            }
        }
    }

    return triplets;
};

// Test
console.log(threeSum([-1, 0, 1, 2, -1, -4]));