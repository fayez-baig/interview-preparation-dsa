function mutation(arr) {
  const strArr1 = arr[0].toLowerCase().split("");
  const strArr2 = arr[1].toLowerCase().split("");
  const Obj = {};
  let possible = true;

  strArr1.forEach((char) => {
    if (!Obj[char]) Obj[char] = 0;
    Obj[char]++;
  });

  strArr2.forEach((char) => {
    if (!Obj[char]) possible = false;
  });
  console.log(possible);

  return possible;
}

// OR

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "neo"]);
