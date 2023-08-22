/**
 * @param {string} str
 * @return {string}
 */

var encode = function (str) {
    return str.split('').join('$__$');
}

/**
 * @param {string} str
 * @return {string}
 */

var decode = function (str) {
    return str.split('$__$').join('');
}

// Test
console.log(decode(encode('Hello World!')));