/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let queue = [];
    for (const brace of s) {
        if (brace === '(' || brace === '{' || brace === '[') {
            queue.push(brace);
        }
        else {
            if (brace === ')' && queue.at(-1) === '(') {
                queue.pop();
            } else if (brace === '}' && queue.at(-1) === '{') {
                queue.pop();
            } else if (brace === ']' && queue.at(-1) === '[') {
                queue.pop();
            } else {
                return false;
            }
        }
    }

    return queue.length === 0;
};

// Test
console.log(isValid("()[]{}"));
console.log(isValid("([{}])"));
console.log(isValid("[(])"));
console.log(isValid("[({})](]"));