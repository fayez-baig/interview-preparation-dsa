/**
   A monotonic function is a function which is either entirely nonincreasing or nondecreasing. 
   A function is monotonic if its first derivative (which need not be continuous) does not change sign.
	
	
	 Input:- [-1,-5,-10,-1100,-1100,-1101,-1102,-9001]
	Output:- True
 */

function isMonotonic(array) {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}
function breaksDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}

// O(n) time | O(1) space - where n is the length of the array
//OR

function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}

// O(n) time | O(1) space - where n is the length of the array
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
