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
    let left = 0;
    let right = nums.length;
    while(left < right) {
        mid=Math.floor((left+right)/2);
        if(nums[mid]===target) return mid;
        else if(nums[mid]<target) left = mid+1;
        else {
            right = mid - 1;
        }
        nums.push(target);
        let res = nums.sort(function(a,b){return a-b});
        return res.indexOf(target);
    }
};
