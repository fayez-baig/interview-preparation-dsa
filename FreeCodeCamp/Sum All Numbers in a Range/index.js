/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
  let minNum = 0;
  let maxNum = 0;
  let sum = 0;
  if (arr[0] < arr[1]) {
    minNum = arr[0];
    maxNum = arr[1];
  } else {
    minNum = arr[1];
    maxNum = arr[0];
  }

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}
sumAll([10, 5]);

//Big O notation of the above program has O(n)  (Linear time complexity)
