/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
 * find two numbers such that they add up to a specific target number. 
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 * The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * Your solution must use only constant extra space.} numbers = [2, 7, 11, 15], target = 9

/**
 * @param {number[2,7,11,15]} numbers
 * @param {number} 9
 * @return {number[]}
 */

 var twoSum = function(numbers, target) {
      // loop through the array
    let p1=0, p2=numbers.length;
    // while p1 is less than p2
    while(p1<p2){
        // if the sum of the two numbers is equal to the target
        if(numbers[p1]+numbers[p2]==target) return [p1+1,p2+1];
        // if the sum of the two numbers is greater than the target
        else if(numbers[p1]+numbers[p2]<target) p1++;
        // if the sum of the two numbers is less than the target
        else p2--;
        // return the indices of the two numbers
    }
    return [];
};