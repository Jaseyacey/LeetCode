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
    k = k%nums.length;
    let [start, end] = [0, nums.length-1];
    let temp = [];
    while(start<end){
        temp.push(nums[start]);
        nums[start] = nums[end];
        nums[end] = temp.pop();
        start++;
        end--;
    }
} 
