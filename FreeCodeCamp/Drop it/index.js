/**
 Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
 until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
  const newArr = [];
  let possible = false;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) || possible) {
      newArr.push(arr[i]);
      possible = true;
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});


// Method 2

function dropElements(arr, func) {
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
     return arr
    }else{
      arr.splice(i,1)
      i--; 
    }
  }
  return []
}



//Big O notation of the above program has O(n)  (Linear time complexity)
