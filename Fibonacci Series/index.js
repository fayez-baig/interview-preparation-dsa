//Using Recursion

function fibonacciSeries(position) {
  if (position < 3) return 1;
  else return fibonacciSeries(position - 1) + fibonacciSeries(position - 2);
}

//Big O notation of the above program has O(2n)  (Exponentail time complexity)

// Other Method

// function fibonacciSeries(position) {
//   let num1 = 1;
//   let num2 = 1;
//   let next;

//   for (i = 2; i < position; i++) {
//     next = num1 + num2;
//     num2 = num1;
//     num1 = next;
//   }
//   return next;
// }

// console.log(fibonacciSeries(6));
