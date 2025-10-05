/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function(nums, target) {
    const map = new Map(); // store number -> index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // return indices
        }
        map.set(nums[i], i); // store current number and its index
    }
    return [];
};
