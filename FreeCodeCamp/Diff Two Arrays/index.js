/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

*/

//Solution 1

function diffArray(arr1, arr2) {
  const newArr = [];

  function difference(arr1, arr2) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        // Pushing the elements unique to arr1 to newArr
        newArr.push(arr1[i]);
      }
    }
  }

  difference(arr1, arr2);
  difference(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Solution 2

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Optimized Solution

function diffArray(arr1, arr2) {
  return [
    ...arr1.filter((x) => !arr2.includes(x)),
    ...arr2.filter((x) => !arr1.includes(x)),
  ];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function diffArray(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
