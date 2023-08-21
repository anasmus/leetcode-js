/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const before = [];
    const after = [];
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (before.length === 0) {
            before.push(1);
            continue;
        }

        before.push(nums[i - 1] * before.at(-1));
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (after.length === 0) {
            after.push(1);
            continue;
        }

        after.push(nums[i + 1] * after.at(-1));
    }
    after.reverse();
    for (let i = 0; i < nums.length; i++) {
        answer[i] = before[i] * after[i];
    }

    return answer;
};

// Test
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));