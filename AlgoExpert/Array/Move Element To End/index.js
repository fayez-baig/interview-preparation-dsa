/**
	Input:- [2, 1, 2, 2, 2, 3, 4, 2], 2
	Output:- [4, 1, 3, 2,2, 2, 2, 2]
 */

function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) {
      swap(i, j, array);
    }
    i++;
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

// O(n) time | O(1) space - where n is the length of the array
