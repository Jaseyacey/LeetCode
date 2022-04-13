// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
        // if the array is empty, return 0
        if(nums.length === 0) return 0;
        // if the target is the first element, return 0
        if(nums.length === 1) return nums[0] === target ? 0 : 1;
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
        // if the target is not found, return the index where it would be if it were inserted
        return left;
    };