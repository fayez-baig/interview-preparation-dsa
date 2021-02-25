// Return an array consisting of the largest number from each provided sub-array. For simplicity,
// the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and
// access each member with array syntax arr[i].

//Using Nested for Loop

function largestOfFour(arr) {
  let maxNumberArr = [];
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
      maxNumberArr[i] = largest;
    }
  }

  return maxNumberArr;
}

//Big O notation of the above program has O(n^2)

// Using Recursion

function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}

largestOfFour([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
