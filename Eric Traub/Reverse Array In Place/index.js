//Be sure not to manipulate array passed in
//Do Not push elements into a new array and return that array

function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3]));

//Big O notation of the above program has O(n)  (Linear time complexity)
