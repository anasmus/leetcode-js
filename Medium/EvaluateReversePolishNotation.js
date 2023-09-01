/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => parseInt(a / b)
    };
    const stack = [];
    for (const token of tokens) {
        if (operations[token]) {
            const second = parseInt(stack.pop());
            const first = parseInt(stack.pop());
            stack.push(operations[token](first, second));
        } else {
            stack.push(token);
        }
    }

    return parseInt(stack.pop());
};

// Test
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));