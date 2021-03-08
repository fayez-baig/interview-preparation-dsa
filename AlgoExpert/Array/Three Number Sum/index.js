/*
Input:- [12, 3, 1, 2, -6, 5, -8, 6], 0
Output:- [12, 3, 1, 2, -6, 5, -8, 6], 0

*/

function threeSum(array, target) {
  array.sort((a, b) => a - b);
  let newArr = [];
  let currentNumber = array[0];
  let left = 0;
  let right = 0;
  for (let i = 0; i < array.length; i++) {
    left = i + 1;
    right = array.length - 1;
    while (left < right) {
      let currentSum = currentNumber + array[left] + array[right];
      if (currentSum === target) {
        newArr.push([currentNumber, array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < target) left++;
      else if (currentSum > target) right--;
    }
    currentNumber = array[i + 1];
  }
  return newArr;
}

console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

//  O(n^2) time | O(n) space
