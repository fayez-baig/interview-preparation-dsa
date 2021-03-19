// using MATH.SQRT method

const getSquareRoot = (number) => Math.sqrt(number);

console.log(`Square root of number is=${getSquareRoot(4)}`);

// without using MATH.SQRT method
const getSquareRootOfNumber = (number) => {
  for (let i = 0; i <= number; i++) {
    if (i * i === number) return i;
  }
  return false;
};
console.log(getSquareRootOfNumber(25));
