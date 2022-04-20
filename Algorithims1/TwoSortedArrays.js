/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n))
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * * @param {number[]} nums3
 * @return {number}
 */
    var findMedianSortedArrays = function(nums1, nums, nums3) {
        // create a new array
        let nums = nums1.concat(nums2, nums3);
        // sort the array
        nums.sort((a,b) => a-b);
        // if the length of the array is odd
        let length = nums.length;
        // if the length is odd
        if(length%2==0) {
        // return the average of the two middle numbers
            return (nums[length/2-1]+nums[length/2])/2;
        } else {
            // return the middle number
            return nums[Math.floor(length/2)]
        }
    };

