/**
 ababaa
 ababaa
 111111 = 6

ababaa
babaa
000010 = 1

ababaa
abaa
111000 = 3

ababaa
baa
001000 = 1

ababaa
aa
100000 = 1

ababaa
a
100000 = 1

6+1+3+1+1+1 = 13
 */

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
