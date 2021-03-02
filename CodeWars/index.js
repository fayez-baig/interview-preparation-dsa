function suffix(str) {
  const strArr = str.split("");
  let newArr = strArr.slice(0);
  let sum = 0;

  function calculateResult(arr) {
    let result = 0;
    for (let i = 0; i < strArr.length; i++) {
      if (str[i] === arr[i]) {
        result++;
      }
    }
    return result;
  }

  while (newArr.length) {
    if (strArr.length === newArr.length) {
      sum = calculateResult(newArr);
    }
    newArr.splice(0, 1);
    sum += calculateResult(newArr);
  }
  return sum;
}

console.log(suffix("ababaa"));
