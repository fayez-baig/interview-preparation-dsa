/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// OR
function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
