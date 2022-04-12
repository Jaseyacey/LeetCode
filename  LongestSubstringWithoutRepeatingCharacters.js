// Given a string s, find the length of the longest substring 
// without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
        Input: s = "abcabcbb"
        let hash = {};
        let start = 0;
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            if (hash[s[i]] !== undefined) {
                start = Math.max(start, hash[s[i]] + 1);
            }
            hash[s[i]] = i;
            max = Math.max(max, i - start + 1);
        }
        return max;
    }

    // 