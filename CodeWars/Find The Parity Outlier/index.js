/**
 You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
 The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
  Write a method that takes the array as an argument and returns this "outlier" N.
 */

function findOutlier(integers) {
  const subArr = integers.slice(0, 3);
  let detector = isArrEvenOrOdd(subArr);
  return integers.filter((number) =>
    detector ? number % 2 === 0 : number % 2 !== 0
  )[0];
}

const isArrEvenOrOdd = (subArr) => {
  let evenCount = 0,
    oddCount = 0;
  for (let i of subArr) i % 2 === 0 ? evenCount++ : oddCount++;
  return evenCount === 1 || evenCount === 0 ? true : false;
};

// OR

function findOutlier(integers) {
  const even = integers.filter((int) => int % 2 === 0);
  const odd = integers.filter((int) => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

//OR

function findOutlier(ints) {
  return ints.slice(0, 3).reduce((a, b) => (b % 2 === 0 ? a : a + 1), 0) >= 2
    ? ints.find((i) => i % 2 === 0)
    : ints.find((i) => i % 2 !== 0);
}
