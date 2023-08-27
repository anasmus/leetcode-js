/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const findNum = (low, high, value) => {
        if (high === low) return null;
        const mid = Math.floor((low + high) / 2);
        const midNum = numbers[mid];
        if (midNum === value) return mid;
        if (value < midNum) return findNum(low, mid, value);
        else return findNum(mid + 1, high, value);
    };

    let secondNum = 0;
    let secondIndex = 0;
    let length = numbers.length;
    for (let i = 0; i < length; i++) {
        secondNum = target - numbers[i];
        secondIndex = findNum(i + 1, length, secondNum);
        if (secondIndex) return [i + 1, secondIndex + 1];
    }
    return null;
};

// Test
console.log(twoSum([2, 7, 11, 15], 9));