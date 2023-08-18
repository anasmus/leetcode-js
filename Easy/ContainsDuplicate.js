/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const vals = {};
    for (let num of nums) {
        if (vals[num] !== undefined) return true;
        vals[num] = num;
    }
    return false;
};