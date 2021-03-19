const reverseNumber = (num) =>
  Number(num.toString().split("").reverse().join("")) === num;

console.log(reverseNumber(2222));
