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

getSum(0, -1);
