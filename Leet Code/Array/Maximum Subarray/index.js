/**
 Given an integer array nums, find the contiguous subarray (containing at least one number) 
 which has the largest sum and return its sum.

 Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
 */

var maxSubArray = function (nums) {
  var maxSoFar = nums[0];
  var maxEndingHere = nums[0];

  for (var i = 1; i < nums.length; i++) {
    console.log(maxEndingHere + nums[i]);
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};
