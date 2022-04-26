/**
 * @param {string} s
 * @return {number}
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */
// Given a string s, find the length of the longest substring without repeating characters.

 var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = 0;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            current = Math.max(current, i - map[s[i]]);
        }
        map[s[i]] = i;
        longest = Math.max(longest, i - current + 1);
    }
    return longest;
};