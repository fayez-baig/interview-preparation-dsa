/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 */

const twoSum = function (nums, target) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};

//Big O notation of the above program has O(n)  (Linear time complexity)
//Big O notation of the above program has O(1)  (Space complexity)

twoSum([2, 7, 11, 15], 9);

const twoSum = function (nums, target) {
  const numsObj = {};
  for (const num of nums) {
    const potentialMatch = target - num;
    if (potentialMatch in numsObj) {
      return [nums.indexOf(potentialMatch), nums.indexOf(num)];
    } else {
      numsObj[num] = true;
    }
  }
  return [];
};

// O(n) time | O(n) space

twoSum([2, 7, 11, 15], 9);

const twoSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else if (sum > target) right--;
  }
  return [];
};
twoSum([2, 7, 11, 15], 9);

// O(nlog(n)) | O(1) space
