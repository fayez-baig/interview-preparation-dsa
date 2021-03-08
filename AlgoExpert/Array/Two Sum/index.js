// Result should be in the form of array of an array

function twoSum(numArr, sum) {
  const sumArr = [];
  const hashTable = [];
  for (i = 0; i < numArr.length; i++) {
    let currentNum = numArr[i];
    let counterPart = sum - currentNum;
    if (hashTable.indexOf(counterPart) !== -1) {
      sumArr.push([currentNum, counterPart]);
    }
    hashTable.push(currentNum);
  }
  return sumArr;
}

console.log(twoSum([1, 6, 4, 5, 3, -3], 7));

//Big O notation of the above program has O(n)  (Linear time complexity)
