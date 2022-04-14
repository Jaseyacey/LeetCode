/**
 Given an integer array nums sorted in non-decreasing order, 
 return an array of the squares of each number sorted in non-decreasing order.

    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].
 */



/**
 * @param   Input: nums = [-4,-1,0,3,10]
 * @return  Output: [0,1,9,16,100]
 */
 var sortedSquares = function(nums) {
    let res = [];
    for(let i=0;i<nums.length;i++){
        res.push(nums[i]*nums[i]);
    }
    return res.sort(function(a,b){return a-b});
};