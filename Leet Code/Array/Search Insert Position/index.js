/**
 Given a sorted array of distinct integers and a target value, return the index if the target is found. 
 If not, return the index where it would be if it were inserted in order.

 Input: nums = [1,3,5,6], target = 5
 Output: 2
 */

var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index !== -1) return index;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      index = i + 1;
    }
  }
  return index === -1 ? 0 : index;
};
