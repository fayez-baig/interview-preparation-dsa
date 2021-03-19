//Formulla

/*
	-b + sqrt(b*b - 4ac) / 2a
	-b - sqrt(b*b - 4ac) / 2a
*/

const getRootOfQuadraticEquation = (b, a, c) => {
  const computedValue = b * b - 4 * a * c;
  if (Math.sign(computedValue) === 1) {
    const root1 = (-1 * b + Math.sqrt(computedValue)) / (2 * a);
    const root2 = (-1 * b - Math.sqrt(computedValue)) / (2 * a);
    return { root1, root2 };
  } else {
    return "Something went wrong please enter different values";
  }
};

console.log(getRootOfQuadraticEquation(5, 2, -3));
