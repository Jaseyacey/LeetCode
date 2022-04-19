/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */

 var reverseString = function(s) {
     // loop through the array
        for(let i = 0; i<s.length/2; i++){ 
            // swap the elements
            let temp = s[i]
            s[i] = s[s.length-1-i]
            s[s.length-1-i] = temp
        }
        // return the array
        return s
};
