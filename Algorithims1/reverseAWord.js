/**
 * @param {string} s
 * @return {string}
 */

var reversewords = function(s) {
    console.log("s: ", s)
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');

};