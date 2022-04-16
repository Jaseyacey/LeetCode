/*
Given an array, rotate the array to the right by 
k steps, where k is non-negative.
*/
/**
 *  @param {number[]} nums
 *  @param {number} k
 *  @return {void} Do not return anything, modify nums in-place instead.
 *  Input: nums = [1,2,3,4,5,6,7], k = 3
*   Output: [5,6,7,1,2,3,4]
 */
 
var rotate = function(nums, k) {
    k = k%nums.length
    let [start, end] = [0, nums.length]
    let temp = []
    // run a while loop to rotate the array
    for(let i = end-1; i>=0; i--){
    // push the last element to the temp array
        let indexTo = i+k
    // if the index is greater than the length of the array,
        if(indexTo >= end) {
    // then we need to add the index to the start of the array            
            temp.push(nums[i])
        } else {
    // else we can just push the element to the temp array
            nums[indexTo] = nums[i]
        }
    }
    // now we need to push the temp array to the end of the array
    for(let i = 0; temp.length > 0; i++){
        nums[i] = temp.pop()
    }    
};
