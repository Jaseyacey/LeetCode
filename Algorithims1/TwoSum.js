/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     // let len = nums.length;
    let map = {};
    // loop through the array
    for (let i = 0; i < nums.length; i++) {
        // if the target - nums[i] is in the map    
        let diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        // if not, add nums[i] to the map
        map[nums[i]] = i;
    }
    // return [] if not found
    return [];
};