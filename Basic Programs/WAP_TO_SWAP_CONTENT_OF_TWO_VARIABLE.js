//Swapping With Temporary Variable
const swapContent = (a, b) => {
  let t;

  t = a;
  a = b;
  b = t;
  return [a, b];
};

console.log(swapContent(10, 20));

//Swapping Without Temporary Variable
const swapContentWithoutTempVariable = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};

console.log(swapContentWithoutTempVariable(10, 20));

//Swapping Without Temporary Variable Short Hand
const swapContentWithoutTempVariableShotHand = (a, b) => {
  [a, b] = [b, a];
  return [a, b];
};

console.log(swapContentWithoutTempVariableShotHand(10, 20));
