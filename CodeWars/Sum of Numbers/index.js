/**
 Given two integers a and b, which can be positive or negative, 
 find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

 Note: a and b are not ordered!
 */

function getSum(a, b) {
  let sum = 0;
  let minNum = 0;
  let maxNum = 0;
  if (a > b) {
    maxNum = a;
    minNum = b;
  } else {
    maxNum = b;
    minNum = a;
  }

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

function GetSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  else return a + GetSum(a - 1, b);
}

getSum(0, -1);
