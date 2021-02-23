function binarySearch(numArr, key) {
  let middleIndex = Math.floor(numArr.length / 2);
  let middlelement = numArr[middleIndex];

  if (middlelement === key) return true;
  else if (middlelement < key && numArr.length > 1) {
    return binarySearch(numArr.splice(middleIndex, numArr.length), key);
  } else if (middlelement > key) {
    return binarySearch(numArr.splice(0, middleIndex), key);
  } else return false;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);

//Big O notation of the above program has O(log n)  (Logarithmic time complexity)
