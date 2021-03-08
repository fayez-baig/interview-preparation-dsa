/**
 Input ([5,1,22,25,6,-1,8,10],[1,6,-1,10])
 OutPut True
 */

function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

//  O(n) time | O(1) space - where n is the length of the array

function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

//  O(n) time | O(1) space - where n is the length of the array

function isValidSubsequence(array, sequence) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (index === sequence.length) break;
    if (array[i] === sequence[index]) {
      index++;
    }
  }
  return index === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
