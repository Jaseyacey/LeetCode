/*
Given an integer array nums, move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/
/**
 * @param {Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
        // loop negatively through the array
        // if the current element is 0,
        // move the element to the end of the array
        // if the current element is not 0,
        // do not move the element
        for (i = nums.length-1; i>=0; i--) {
            if(nums[i] === 0) {
                nums.splice(i, 1);
                nums.push(0);
            }
        }
        return nums;
};