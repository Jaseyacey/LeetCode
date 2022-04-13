// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
// if the array is empty, return -1
     if(nums.length === 0) return -1;
// if the target is the first element, return 0
     if(nums.length === 1) return nums[0] === target ? 0 : -1;
        let left =  0;
        let right = nums.length -1;
// while the left is less than the right
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if (nums[mid] === target) return mid;
            if (nums[mid] < target) {
            left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
// if the target is not found, return -1
        return -1;
};